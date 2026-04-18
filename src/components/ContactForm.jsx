
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_xq99sct';
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_f6tptid';
const EMAILJS_PUBLIC_KEY = 'VMqIefDXUISYTLxmu';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONTACT_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No subject',
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

    } catch (err) {
      console.error("Error sending contact form:", err);
      toast({
        title: "Unable to Send Message",
        description: "Something went wrong. Please email us directly at vivan.shankar@gmail.com",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-border space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.name ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Jane Doe"
              disabled={loading}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.email ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="jane@example.com"
              disabled={loading}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we help?"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.message ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
            placeholder="Your message here..."
            disabled={loading}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <Button type="submit" disabled={loading} className="w-full h-12 text-lg rounded-xl">
          {loading ? (
            <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
          ) : (
            <><Send className="mr-2 h-5 w-5" /> Send Message</>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      console.log("Submitting contact form with data:", {
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'No subject',
        messageLength: formData.message.length
      });

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }
      });

      console.log("Edge function response:", { data, error });

      if (error) {
        console.error("Supabase function invocation error:", error);
        throw error;
      }
      
      if (data && !data.success) {
        console.error("Edge function returned error:", data.error);
        throw new Error(data.error || 'Failed to send email');
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll respond to your message soon.",
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
      
    } catch (err) {
      console.error("Error sending contact form:", err);
      
      let errorMessage = "Failed to send message. Please try again or email us directly at vivan.shankar@gmail.com";
      
      if (err.message) {
        if (err.message.includes('Forbidden') || err.message.includes('403')) {
          errorMessage = "Email service configuration error. Please contact us directly at vivan.shankar@gmail.com";
        } else if (err.message.includes('Unauthorized') || err.message.includes('401')) {
          errorMessage = "Email service authentication error. Please contact us directly at vivan.shankar@gmail.com";
        } else if (err.message.includes('network') || err.message.includes('fetch')) {
          errorMessage = "Network error. Please check your connection and try again, or email us at vivan.shankar@gmail.com";
        } else if (!err.message.includes('Edge function received')) {
          errorMessage = err.message;
        }
      }
      
      toast({
        title: "Unable to Send Message",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-sm border border-border space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:outline-none focus:ring-2`}
              placeholder="Jane Doe"
              disabled={loading}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:outline-none focus:ring-2`}
              placeholder="jane@example.com"
              disabled={loading}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we help?"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-red-500">*</span></label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-border focus:ring-primary'} focus:outline-none focus:ring-2 resize-none`}
            placeholder="Your message here..."
            disabled={loading}
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <Button type="submit" disabled={loading} className="w-full h-12 text-lg rounded-xl">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> 
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" /> 
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
