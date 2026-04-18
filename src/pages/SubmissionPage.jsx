import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send, CheckCircle, FileText, AlertCircle, Loader2 } from 'lucide-react';

const SubmissionPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [essayText, setEssayText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!essayText.trim()) {
      toast({
        title: "Error",
        description: "Your essay cannot be empty.",
        variant: "destructive"
      });
      return;
    }

    if (essayText.trim().split(/\s+/).length < 100) {
      toast({
        title: "Too short",
        description: "Your essay must be at least 100 words.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('participant_submissions')
        .insert([{
          participant_id: user.id,
          essay_text: essayText
        }]);

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Success",
        description: "Your essay has been submitted successfully."
      });

    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error.message || "An error occurred while submitting. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>Submit Essay | National Economics Challenge</title>
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header / Profile Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Participant Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, <span className="font-semibold">{user?.name}</span></p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-gray-500">School/Institution</p>
            <p className="font-medium text-gray-900">{user?.school}</p>
          </div>
        </div>

        {/* Main Form Area */}
        {isSubmitted ? (
          <div className="bg-white rounded-xl shadow-sm border border-emerald-200 p-12 text-center">
            <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-emerald-100 mb-6">
              <CheckCircle className="h-10 w-10 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Submission Received!</h2>
            <p className="text-lg text-gray-600 max-w-lg mx-auto mb-8">
              Thank you for submitting your essay to the National Economics Challenge. Our judges will review your work shortly.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg inline-block border border-gray-200">
              <p className="text-sm text-gray-500 mb-1">Status</p>
              <p className="font-bold text-emerald-700 flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4" /> Successfully Submitted
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
              <div className="bg-primary/10 p-3 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Submit Your Essay</h2>
                <p className="text-sm text-gray-500">Paste your final essay text below. Formatting will be preserved.</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 text-sm text-amber-800">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                <p>
                  <strong>Important:</strong> Please ensure your essay meets the word count requirements. Submissions are final and cannot be edited once submitted.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Label htmlFor="essay" className="text-base font-semibold">Essay Content</Label>
                  <span className="text-xs text-gray-500 font-medium">
                    {essayText.trim() ? essayText.trim().split(/\s+/).length : 0} words
                  </span>
                </div>
                <Textarea
                  id="essay"
                  placeholder="Paste your essay here..."
                  className="min-h-[400px] font-serif text-gray-900 bg-white border-gray-300 focus:ring-primary focus:border-primary resize-y"
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex justify-end pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="px-8 text-lg h-14" 
                  disabled={isSubmitting || !essayText.trim()}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Final Essay
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubmissionPage;