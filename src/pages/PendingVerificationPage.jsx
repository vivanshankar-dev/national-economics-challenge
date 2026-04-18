
import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Mail, Loader2, LogOut } from 'lucide-react';

const PendingVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const emailParam = searchParams.get('email');
  const { logout, user } = useAuth();
  const [isResending, setIsResending] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const displayEmail = emailParam || user?.email || "your email address";

  const handleResend = async () => {
    if (!displayEmail || displayEmail === "your email address") {
      toast({
        title: "Error",
        description: "Could not identify your email address to resend.",
        variant: "destructive"
      });
      return;
    }

    setIsResending(true);
    try {
      // Fetch user's token from participants table
      const { data, error } = await supabase
        .from('participants')
        .select('verification_token, email_verified')
        .eq('email', displayEmail)
        .single();

      if (error || !data) {
        throw new Error("Could not find your account.");
      }

      if (data.email_verified) {
        toast({ title: "Already Verified", description: "This email is already verified. You can log in." });
        navigate('/login');
        return;
      }

      let token = data.verification_token;
      
      // If no token exists, generate a new one
      if (!token) {
        token = crypto.randomUUID();
        await supabase.from('participants').update({ verification_token: token }).eq('email', displayEmail);
      }

      const verificationLink = `${window.location.origin}/verify-email?token=${token}`;
      
      const { error: funcError } = await supabase.functions.invoke('send-verification-email', {
        body: { email: displayEmail, verificationLink }
      });

      if (funcError) throw funcError;

      toast({
        title: "Email Sent",
        description: "A new verification link has been sent to your email.",
      });
    } catch (err) {
      toast({
        title: "Failed to resend",
        description: err.message,
        variant: "destructive"
      });
    } finally {
      setIsResending(false);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <>
      <Helmet>
        <title>Pending Verification | National Economics Challenge</title>
      </Helmet>
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-muted/30">
        <div className="bg-card p-10 rounded-2xl shadow-sm border border-border max-w-lg w-full flex flex-col items-center">
          <div className="bg-primary/10 p-4 rounded-full mb-6">
            <Mail className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-3xl font-extrabold text-foreground mb-4">Please verify your email to continue</h1>
          <p className="text-lg text-muted-foreground mb-4">
            We've sent a verification link to <span className="font-semibold text-foreground">{displayEmail}</span>.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            Please check your inbox and click the link to verify your account before logging in.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button 
              onClick={handleResend} 
              disabled={isResending}
              size="lg"
            >
              {isResending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Resend Verification Email
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handleLogout}
              size="lg"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Return to Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingVerificationPage;
