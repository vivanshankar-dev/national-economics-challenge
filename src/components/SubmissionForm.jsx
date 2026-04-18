import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabase';

const SubmissionForm = () => {
  const { toast } = useToast();
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');
  
  const initialFormState = {
    fullName: '',
    email: '',
    school: '',
    country: '',
    promptId: '',
    essayFile: null,
    declaration: false
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchPrompts();
  }, []);

  const fetchPrompts = async () => {
    setLoading(true);
    try {
      console.log('Initiating Supabase fetch for SubmissionForm prompts...');
      const { data, error } = await supabase
        .from('prompts')
        .select('*')
        .order('category', { ascending: true });

      if (error) {
        console.error('❌ Supabase fetch error (prompts):', error.message);
        throw error;
      }
      
      if (data) {
        setPrompts(data);
      }
    } catch (error) {
      console.error('❌ Error fetching prompts:', error);
      toast({
        title: 'Error Loading Prompts',
        description: 'Failed to load prompts from the database. Please check your connection.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setErrors(prev => ({ ...prev, essayFile: 'Only PDF files are allowed' }));
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, essayFile: 'File size must be less than 10MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, essayFile: file }));
      setErrors(prev => ({ ...prev, essayFile: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!emailRegex.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.school.trim()) newErrors.school = 'School/Institution is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.promptId) newErrors.promptId = 'Please select a prompt from the list';
    if (!formData.essayFile) newErrors.essayFile = 'Please upload your essay file (PDF)';
    if (!formData.declaration) newErrors.declaration = 'You must agree to the Declaration of Originality to submit';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please correct the errors in the form before submitting.',
        variant: 'destructive'
      });
      return;
    }

    setSubmitting(true);

    try {
      // 1. Upload File to public 'essays' bucket
      const fileExt = 'pdf';
      const cleanName = formData.fullName.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `${Date.now()}-${cleanName}.${fileExt}`;
      const filePath = `submissions/${fileName}`;

      console.log('Initiating file upload to Supabase storage...');
      const { error: uploadError } = await supabase.storage
        .from('essays')
        .upload(filePath, formData.essayFile);

      if (uploadError) {
        console.error('❌ Supabase storage upload error:', uploadError.message);
        if (uploadError.message.includes('bucket not found')) {
           throw new Error('Storage bucket "essays" not found or access denied. Please contact support.');
        } else if (uploadError.message.includes('row level security') || uploadError.message.includes('policy')) {
           throw new Error('Upload blocked by security policy. Public uploads might not be fully configured.');
        }
        throw new Error(`File upload failed: ${uploadError.message}`);
      }

      // 2. Get Public URL
      const { data: { publicUrl } } = supabase.storage
        .from('essays')
        .getPublicUrl(filePath);

      // 3. Insert Database Record (no auth required)
      console.log('Initiating database insert for submission...');
      const { data, error: insertError } = await supabase
        .from('submissions')
        .insert([
          {
            full_name: formData.fullName,
            email: formData.email,
            school: formData.school,
            country: formData.country,
            prompt_id: formData.promptId,
            essay_url: publicUrl,
            originality_declaration: formData.declaration,
            status: 'pending'
          }
        ])
        .select();

      if (insertError) {
        console.error('❌ Supabase database insert error:', insertError.message);
        if (insertError.message.includes('row level security') || insertError.message.includes('policy')) {
          throw new Error('Database security policy blocked the submission. Public inserts are not fully enabled.');
        }
        throw new Error(`Database submission failed: ${insertError.message}`);
      }

      console.log('✅ Submission completed successfully!');
      setSubmissionId(data && data[0] ? data[0].id : 'SUB-' + Date.now());
      setSubmitted(true);
      setFormData(initialFormState); // Clear form fields
      window.scrollTo({ top: 0, behavior: 'smooth' });

      toast({
        title: 'Success! Entry Received',
        description: 'Your essay has been uploaded and recorded securely.',
      });

    } catch (error) {
      console.error('❌ Submission transaction error:', error);
      toast({
        title: 'Submission Failed',
        description: error.message || 'There was an error submitting your essay. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData(initialFormState);
    setSubmissionId('');
    setErrors({});
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 text-center shadow-lg border border-emerald-100"
      >
        <CheckCircle className="h-20 w-20 text-emerald-600 mx-auto mb-6" />
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Submission Received!</h3>
        <p className="text-lg text-gray-700 mb-4">
          Thank you for participating in the competition. Your essay has been successfully uploaded and recorded.
        </p>
        <div className="bg-white rounded-lg p-4 mb-6 inline-block border border-emerald-100 shadow-sm">
          <p className="text-sm text-gray-600 mb-1">Reference ID:</p>
          <p className="text-xl font-mono font-bold text-emerald-600 tracking-wide">{submissionId}</p>
        </div>
        <p className="text-gray-600 max-w-lg mx-auto">
          Please keep your Reference ID for future correspondence. Your submission is now officially in our review queue.
        </p>
        <Button 
          onClick={handleReset} 
          variant="outline" 
          className="mt-8 border-emerald-200 hover:bg-emerald-50 text-emerald-700"
        >
          Submit Another Entry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-900 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-gray-900`}
            placeholder="John Doe"
          />
          {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-gray-900`}
            placeholder="john@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="school" className="block text-sm font-medium text-gray-900 mb-2">
            School/Institution <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="school"
            name="school"
            value={formData.school}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.school ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-gray-900`}
            placeholder="High School / University Name"
          />
          {errors.school && <p className="mt-1 text-sm text-red-500">{errors.school}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-900 mb-2">
            Country <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.country ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-gray-900`}
            placeholder="e.g. United Kingdom"
          />
          {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="promptId" className="block text-sm font-medium text-gray-900 mb-2">
          Select Prompt Question <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="promptId"
            name="promptId"
            value={formData.promptId}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.promptId ? 'border-red-500' : 'border-gray-300'
            } focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white text-gray-900 appearance-none`}
            disabled={loading}
          >
            <option value="">
              {loading ? 'Loading prompts from database...' : 'Please select the prompt you are answering...'}
            </option>
            {prompts.map((prompt) => (
              <option key={prompt.id} value={prompt.id}>
                {prompt.category}: {prompt.title}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
        {errors.promptId && <p className="mt-1 text-sm text-red-500">{errors.promptId}</p>}
        {!loading && prompts.length === 0 && (
          <div className="mt-2 text-xs text-amber-600 bg-amber-50 p-2 rounded flex items-start gap-2">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>Warning: No prompts loaded. Ensure database is connected.</span>
          </div>
        )}
      </div>

      <div>
        <label htmlFor="essayFile" className="block text-sm font-medium text-gray-900 mb-2">
          Upload Essay (PDF only, max 10MB) <span className="text-red-500">*</span>
        </label>
        <div className={`relative border-2 border-dashed ${
          errors.essayFile ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-emerald-500 hover:bg-gray-50'
        } rounded-xl p-8 text-center transition-all duration-200`}>
          <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
          <input
            type="file"
            id="essayFile"
            name="essayFile"
            accept=".pdf"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          <div className="space-y-1">
            {formData.essayFile ? (
              <>
                <p className="text-sm font-medium text-emerald-600">{formData.essayFile.name}</p>
                <p className="text-xs text-gray-500">{(formData.essayFile.size / 1024 / 1024).toFixed(2)} MB</p>
              </>
            ) : (
              <>
                <p className="text-sm text-gray-600">
                  <span className="text-emerald-600 font-medium">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PDF files only</p>
              </>
            )}
          </div>
        </div>
        {errors.essayFile && <p className="mt-1 text-sm text-red-500">{errors.essayFile}</p>}
      </div>

      <div className={`bg-gray-50 rounded-lg p-5 border ${errors.declaration ? 'border-red-500' : 'border-gray-200'}`}>
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            type="checkbox"
            name="declaration"
            checked={formData.declaration}
            onChange={handleInputChange}
            className="mt-1 h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
          />
          <div className="text-sm">
            <span className="font-bold text-gray-900 block mb-1">Academic Integrity Declaration</span>
            <span className="text-gray-600 leading-relaxed">
              I certify that this essay is entirely my own original work. I have properly cited all sources used, and I have not used AI tools to generate the content of this essay. I understand that plagiarism will result in immediate disqualification.
            </span>
          </div>
        </label>
        {errors.declaration && <p className="mt-2 text-sm text-red-500">{errors.declaration}</p>}
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg transition-all transform hover:-translate-y-0.5"
      >
        {submitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing Submission...
          </span>
        ) : (
          'Submit Official Entry'
        )}
      </Button>
    </form>
  );
};

export default SubmissionForm;