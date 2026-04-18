
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight, LogOut } from 'lucide-react';

const SubmissionSuccessPage = () => {
  const { user, logout } = useAuth();
  
  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <Helmet>
        <title>Submission Successful | National Economics Challenge</title>
      </Helmet>
      <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full bg-card rounded-3xl p-10 text-center shadow-lg border border-border">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-3xl font-extrabold text-foreground mb-4">Essay Submitted Successfully!</h1>
          
          <p className="text-muted-foreground mb-8 text-lg">
            Thank you for participating in the National Economics Challenge. Your work is now under review by our panel of judges.
          </p>

          <div className="bg-secondary/30 rounded-xl p-6 text-left mb-8 border border-secondary">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-4">Submission Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Participant:</span>
                <span className="font-semibold text-foreground">{user?.user_metadata?.full_name || user?.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Timestamp:</span>
                <span className="font-semibold text-foreground">{new Date().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <span className="font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full text-xs">Received</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <Link to="/">
              <Button className="w-full h-12 text-base">
                Return to Home <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" className="w-full h-12 text-base" onClick={handleLogout}>
              <LogOut className="mr-2 w-4 h-4" /> Log Out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubmissionSuccessPage;
