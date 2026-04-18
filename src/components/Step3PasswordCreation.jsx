
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Loader2, Copy, Check, KeyRound } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import bcrypt from 'bcryptjs';

const generatePassword = () => {
  const words = ['Eagle', 'River', 'Storm', 'Maple', 'Comet', 'Ember', 'Frost', 'Blaze', 'Cedar', 'Ocean'];
  const word = words[Math.floor(Math.random() * words.length)];
  const num = Math.floor(1000 + Math.random() * 9000);
  const symbols = ['!', '@', '#', '$', '&'];
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  return `${word}${num}${symbol}`;
};

const Step3PasswordCreation = ({ data }) => {
  const [password] = useState(generatePassword());
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: password,
        options: {
          data: {
            full_name: data.fullName,
            school: data.school,
          }
        }
      });

      if (authError) throw authError;

      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);

      const { error: insertError } = await supabase
        .from('participants')
        .insert([{
          id: authData.user.id,
          name: data.fullName,
          email: data.email,
          school: data.school,
          username: data.email,
          password_hash: passwordHash,
          email_verified: true
        }]);

      if (insertError) throw insertError;

      const { error: signupError } = await supabase
        .from('signups')
        .insert([{
          name: data.fullName,
          email: data.email,
          school: data.school || 'Not provided',
          username: data.email,
          country: data.country || 'Not provided',
          signup_date: new Date().toISOString()
        }]);

      if (signupError) {
        console.error("Failed to save signup data:", signupError);
      }

      await supabase.functions.invoke('send-signup-credentials', {
        body: { email: data.email, username: data.email, password: password }
      });

      await supabase.functions.invoke('send-signup-email', {
        body: { 
          name: data.fullName,
          email: data.email,
          school: data.school || 'Not provided',
          username: data.email,
          country: data.country || 'Not provided'
        }
      });

      await supabase.auth.signOut();
      navigate('/confirmation');
    } catch (error) {
      console.error("Account creation error:", error);
      toast({
        title: "Account Creation Failed",
        description: error.message || "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center">
        <KeyRound className="mx-auto h-10 w-10 text-primary mb-3" />
        <h3 className="font-bold text-lg text-foreground mb-1">Your Password is Ready</h3>
        <p className="text-sm text-muted-foreground">
          We've generated a secure password for your account. <strong>Please save it now</strong> — you'll need it to log in.
        </p>
      </div>

      <div className="bg-secondary/40 border-2 border-primary/30 rounded-2xl p-5 text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-semibold">Your Password</p>
        <p className="text-2xl font-mono font-bold text-foreground tracking-widest mb-4">{password}</p>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied!' : 'Copy Password'}
        </button>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
        ⚠️ <strong>Important:</strong> Save this password somewhere safe before continuing. You won't be able to see it again. Your login email is <strong>{data.email}</strong>.
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? 'Creating Account...' : 'I\'ve Saved My Password — Create Account'}
      </Button>
    </form>
  );
};

export default Step3PasswordCreation;
