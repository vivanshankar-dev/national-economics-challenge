import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_xq99sct';
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_f6tptid';
const EMAILJS_PUBLIC_KEY = 'VMqIefDXUlSYTLxmu';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) { newErrors.email = 'Email is required'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) { newErrors.email = 'Invalid email'; }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, {
        from_name: formData.name, from_email: formData.email,
        subject: formData.subject || 'No subject', message: formData.message,
      }, EMAILJS_PUBLIC_KEY);
      toast({ title: "Message Sent!", description: "We'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (err) {
      toast({ title: "Unable to Send Message", description: "Please email vivan.shankar@gmail.com directly.", variant: "destructive" });
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
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} disabled={loading}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.name ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="Jane Doe" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-red-500">*</span></label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} disabled={loading}
              className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.email ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder="jane@example.com" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} disabled={loading}
            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="How can we help?" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-red-500">*</span></label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} disabled={loading}
            className={`w-full px-4 py-3 rounded-xl border bg-background text-foreground ${errors.message ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-primary resize-none`}
            placeholder="Your message here..."></textarea>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>
        <Button type="submit" disabled={loading} className="w-full h-12 text-lg rounded-xl">
          {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</> : <><Send className="mr-2 h-5 w-5" /> Send Message</>}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
