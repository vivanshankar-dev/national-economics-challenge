
import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '@/components/ContactForm';
import { Mail, MessageSquare, User } from 'lucide-react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | National Economics Challenge</title>
        <meta name="description" content="Get in touch with the National Economics Challenge team." />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-extrabold text-foreground mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about the competition, want to become a partner, or interested in our ambassador program? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-primary/5 p-8 rounded-3xl border-2 border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <User className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-xl text-foreground">Direct Contact</h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Reach the organizer directly:
                </p>
                <a href="mailto:vivan.shankar@gmail.com" className="inline-flex items-center text-primary font-semibold hover:underline text-sm">
                  <Mail className="w-4 h-4 mr-2 shrink-0" />
                  vivan.shankar@gmail.com
                </a>
              </div>

              <div className="bg-secondary/30 p-8 rounded-3xl border border-secondary">
                <h3 className="font-bold text-xl mb-2 text-foreground">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  Our team typically responds within 24-48 business hours. During peak submission periods, responses may take slightly longer.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
