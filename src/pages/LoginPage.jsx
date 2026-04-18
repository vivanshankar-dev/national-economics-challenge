
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BookOpen, Loader2, MailWarning } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [unverifiedEmail, setUnverifiedEmail] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear unverified state if they change email
    if (unverifiedEmail) setUnverifiedEmail(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUnverifiedEmail(null);

    try {
      await login(formData.email, formData.password);
      // Redirect to protected dashboard/submission after successful login
      navigate('/essay-submission', { replace: true });
    } catch (error) {
      if (error.message.includes("verify your email")) {
        setUnverifiedEmail(formData.email);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Log In | National Economics Challenge</title>
      </Helmet>
      <div className="min-h-screen bg-muted/30 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <BookOpen className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">Welcome back</h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Log in to submit your essay or view your dashboard
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-card py-8 px-4 shadow-sm border border-border sm:rounded-2xl sm:px-10">
            
            {unverifiedEmail && (
              <div className="mb-6 bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex flex-col items-center text-center">
                <MailWarning className="h-8 w-8 text-destructive mb-2" />
                <h3 className="font-semibold text-destructive mb-1">Your email is not verified</h3>
                <p className="text-sm text-destructive/90 mb-3">
                  Check your inbox for the verification link.
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate(`/pending-verification?email=${encodeURIComponent(unverifiedEmail)}`)}
                  className="w-full bg-background"
                >
                  Resend Verification Email
                </Button>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="email">Email address</Label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="text-foreground"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="text-foreground"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Link to="/signup" className="font-bold text-primary hover:text-primary/80 transition-colors">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
