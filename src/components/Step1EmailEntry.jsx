
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Step1EmailEntry = ({ onNext, data, updateData }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if email already exists
      const { data: existingUser, error: checkError } = await supabase
        .from('participants')
        .select('id')
        .eq('email', data.email)
        .maybeSingle();

      if (checkError) {
        console.error("Error checking existing user:", checkError);
      }

      if (existingUser) {
        throw new Error("An account with this email already exists.");
      }

      // Generate 6-digit code
      const code = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 15 * 60000).toISOString();

      // Store in DB
      const { error: dbError } = await supabase
        .from('verification_codes')
        .insert([{ email: data.email, code, expires_at: expiresAt }]);

      if (dbError) throw dbError;

      // Send email using our edge function
      const { data: funcData, error: funcError } = await supabase.functions.invoke('send-verification-email', {
        body: { 
          email: data.email, 
          verificationCode: code,
          userName: data.fullName
        }
      });

      // Handle function invocation errors (e.g. network failure)
      if (funcError) {
        console.error("Edge function invocation error:", funcError);
        throw new Error("Failed to send verification email. Please try again.");
      }

      // Handle custom success: false responses returned with status 200
      if (funcData && funcData.success === false) {
        console.error("Email send failed detail:", funcData.error, funcData.details);
        
        let errorMessage = "Failed to send verification email.";
        if (funcData.error && !funcData.error.includes('Edge function received')) {
          errorMessage = funcData.error;
        }
        
        throw new Error(errorMessage + " Please try again or contact support.");
      }

      toast({
        title: "Verification Code Sent!",
        description: "Please check your email inbox for the 6-digit verification code.",
      });
      onNext();
    } catch (error) {
      console.error("Signup submission error:", error);
      
      let errorMessage = error.message || "An unexpected error occurred.";
      
      // Don't show raw "Edge function received..." errors to users
      if (errorMessage.includes('Edge function received')) {
        errorMessage = "Failed to send verification email. Please try again or contact support.";
      }
      
      toast({
        title: "Unable to Send Verification Code",
        description: errorMessage,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          required
          value={data.fullName || ''}
          onChange={(e) => updateData({ fullName: e.target.value })}
          placeholder="John Doe"
          className="mt-1 text-foreground"
        />
      </div>
      <div>
        <Label htmlFor="email">Email address</Label>
        <Input
          id="email"
          type="email"
          required
          value={data.email || ''}
          onChange={(e) => updateData({ email: e.target.value })}
          placeholder="john@example.com"
          className="mt-1 text-foreground"
        />
      </div>
      <div>
        <Label htmlFor="school">School / Institution</Label>
        <Input
          id="school"
          required
          value={data.school || ''}
          onChange={(e) => updateData({ school: e.target.value })}
          placeholder="Global High School"
          className="mt-1 text-foreground"
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? 'Sending Code...' : 'Continue'}
      </Button>
    </form>
  );
};

export default Step1EmailEntry;
