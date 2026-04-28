
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MailCheck } from 'lucide-react';

const ConfirmationPage = () => {
  return (
    <>
      <Helmet>
        <title>Email Confirmation | National Economics Challenge</title>
      </Helmet>
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-muted/30">
        <div className="bg-card p-10 rounded-2xl shadow-sm border border-border max-w-lg w-full flex flex-col items-center">
          <div className="bg-primary/10 p-4 rounded-full mb-6">
            <MailCheck className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground mb-4">Account Created!</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Your account has been successfully created.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            You can now log in using your email address and the password you were shown. Head to the Log In page whenever you're ready to submit your essay.
          </p>
          <Link to="/" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ConfirmationPage;
