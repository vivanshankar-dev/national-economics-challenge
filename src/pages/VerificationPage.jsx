
import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

const VerificationPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setStatus('error');
        setMessage('No verification token provided.');
        return;
      }

      try {
        // Find participant with this token
        const { data, error: findError } = await supabase
          .from('participants')
          .select('id, email_verified')
          .eq('verification_token', token)
          .single();

        if (findError || !data) {
          throw new Error('Invalid or expired verification token.');
        }

        if (data.email_verified) {
          setStatus('success');
          setMessage('Your email is already verified!');
          return;
        }

        // Update verification status
        const { error: updateError } = await supabase
          .from('participants')
          .update({ email_verified: true, verification_token: null })
          .eq('id', data.id);

        if (updateError) {
          throw new Error('Failed to verify email. Please try again.');
        }

        setStatus('success');
        setMessage('Email verified successfully! You can now log in.');
      } catch (err) {
        setStatus('error');
        setMessage(err.message);
      }
    };

    verifyToken();
  }, [token]);

  return (
    <>
      <Helmet>
        <title>Verify Email | National Economics Challenge</title>
      </Helmet>
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-muted/30">
        <div className="bg-card p-10 rounded-2xl shadow-sm border border-border max-w-lg w-full flex flex-col items-center">
          
          {status === 'verifying' && (
            <>
              <Loader2 className="h-16 w-16 text-primary animate-spin mb-6" />
              <h1 className="text-2xl font-bold text-foreground mb-4">Verifying Email...</h1>
              <p className="text-muted-foreground">Please wait while we verify your email address.</p>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-6" />
              <h1 className="text-2xl font-bold text-foreground mb-4">Success!</h1>
              <p className="text-muted-foreground mb-8">{message}</p>
              <Link to="/login" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto">
                  Go to Login
                </Button>
              </Link>
            </>
          )}

          {status === 'error' && (
            <>
              <XCircle className="h-16 w-16 text-destructive mb-6" />
              <h1 className="text-2xl font-bold text-foreground mb-4">Verification Failed</h1>
              <p className="text-muted-foreground mb-8">{message}</p>
              <Link to="/login" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Return to Login
                </Button>
              </Link>
            </>
          )}

        </div>
      </div>
    </>
  );
};

export default VerificationPage;
