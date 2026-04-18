
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { UploadCloud, FileText, Loader2, Info } from 'lucide-react';

const EssaySubmissionPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [file, setFile] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF document.",
          variant: "destructive"
        });
        e.target.value = null;
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file || !agreed) return;

    setUploading(true);
    try {
      // 1. Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}-${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('essays')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // 2. Get Public URL
      const { data: urlData } = supabase.storage
        .from('essays')
        .getPublicUrl(fileName);

      const submittedAt = new Date().toISOString();
      const fullName = user?.user_metadata?.full_name || user?.email;
      const school = user?.user_metadata?.school || 'Not provided';
      const promptTitle = 'General Economics Essay';

      // 3. Save to participant_submissions
      const { error: dbError } = await supabase
        .from('participant_submissions')
        .insert([{
          participant_id: user.id,
          essay_text: urlData.publicUrl, // Storing URL in essay_text as per schema constraint
          submitted_at: submittedAt
        }]);

      if (dbError) throw dbError;

      // 4. Save to essay_submissions table
      console.log("Saving essay submission data to essay_submissions table...");
      const { error: essaySubmissionError } = await supabase
        .from('essay_submissions')
        .insert([{
          full_name: fullName,
          email: user?.email,
          school: school,
          country: 'Not provided',
          prompt_title: promptTitle,
          essay_url: urlData.publicUrl,
          submitted_at: submittedAt
        }]);

      if (essaySubmissionError) {
        console.error("Failed to save essay submission data:", essaySubmissionError);
        throw new Error("Failed to save essay submission data: " + essaySubmissionError.message);
      }

      console.log("Essay submission data saved successfully");
      toast({
        title: "Submission Recorded",
        description: "Your essay submission details have been saved.",
      });

      // 5. Send notification email to team
      console.log("Sending submission notification to team...");
      const { error: notificationError } = await supabase.functions.invoke('send-essay-submission-email', {
        body: { 
          full_name: fullName,
          email: user?.email,
          school: school,
          country: 'Not provided',
          prompt_title: promptTitle,
          essay_url: urlData.publicUrl,
          submitted_at: submittedAt
        }
      });

      if (notificationError) {
        console.error("Failed to send submission notification email:", notificationError);
        // Don't block submission completion if email fails
      } else {
        console.log("Submission notification sent successfully");
        toast({
          title: "Team Notified",
          description: "Submission confirmation sent to team@nationaleconomicschallenge.dedyn.io",
        });
      }

      toast({
        title: "Success",
        description: "Your essay has been submitted successfully.",
      });
      
      navigate('/submission-success');
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred while submitting your essay.",
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Submit Essay | National Economics Challenge</title>
      </Helmet>
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          
          <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20 flex items-start space-x-4">
            <div className="p-3 bg-primary rounded-full text-primary-foreground">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Submitting as</h2>
              <p className="text-muted-foreground">{user?.user_metadata?.full_name || user?.email}</p>
              <p className="text-sm text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Submission Guidelines</h3>
            <div className="bg-muted/50 p-4 rounded-xl text-sm text-muted-foreground space-y-2 mb-6 border border-border">
              <p className="flex items-center"><Info className="w-4 h-4 mr-2 text-primary" /> Please ensure your essay follows the 1,200 to 1,800 word limit.</p>
              <p className="flex items-center"><Info className="w-4 h-4 mr-2 text-primary" /> Only PDF files are accepted.</p>
              <p className="flex items-center"><Info className="w-4 h-4 mr-2 text-primary" /> All submissions are final. Ensure you have proofread your work.</p>
              <p className="flex items-center"><Info className="w-4 h-4 mr-2 text-primary" /> Submissions are checked for plagiarism and AI generation.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Upload your Essay (PDF)</Label>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:bg-muted/50 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="essay-upload"
                  />
                  <label htmlFor="essay-upload" className="cursor-pointer flex flex-col items-center">
                    <UploadCloud className="w-12 h-12 text-muted-foreground mb-4" />
                    <span className="text-foreground font-medium mb-1">
                      {file ? file.name : "Click to upload or drag and drop"}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : "PDF up to 10MB"}
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-secondary/30 p-4 rounded-xl border border-secondary">
                <Checkbox 
                  id="agreed" 
                  checked={agreed} 
                  onCheckedChange={(checked) => setAgreed(checked)}
                  className="mt-1"
                />
                <Label htmlFor="agreed" className="text-sm leading-relaxed text-foreground cursor-pointer">
                  I confirm that I have read and understood all the rules and guidelines in the Competition Manual. I declare that this submission is entirely my own original work, properly cited, and free from prohibited AI assistance.
                </Label>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full text-lg h-14"
                disabled={!file || !agreed || uploading}
              >
                {uploading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                {uploading ? "Submitting securely..." : "Submit Essay"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EssaySubmissionPage;
