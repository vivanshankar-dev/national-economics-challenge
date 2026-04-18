
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import bcrypt from 'bcryptjs';

const Step3PasswordCreation = ({ data }) => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Register with Supabase Auth to enable login
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

      // Hash password for the table as requested
      const salt = bcrypt.genSaltSync(10);
      const passwordHash = bcrypt.hashSync(password, salt);

      // Create participant record
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

      // Save signup data to signups table
      console.log("Saving signup data to signups table...");
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
        throw new Error("Failed to save signup data: " + signupError.message);
      }

      console.log("Signup data saved successfully");
      toast({
        title: "Signup Data Saved",
        description: "Your registration details have been recorded.",
      });

      // Send credentials email to user
      const { error: credentialsError } = await supabase.functions.invoke('send-signup-credentials', {
        body: { email: data.email, username: data.email, password: password }
      });

      if (credentialsError) {
        console.error("Failed to send credentials email:", credentialsError);
      }

      // Send signup notification email to team
      console.log("Sending signup notification to team...");
      const { error: notificationError } = await supabase.functions.invoke('send-signup-email', {
        body: { 
          name: data.fullName,
          email: data.email,
          school: data.school || 'Not provided',
          username: data.email,
          country: data.country || 'Not provided'
        }
      });

      if (notificationError) {
        console.error("Failed to send signup notification email:", notificationError);
        // Don't block signup completion if email fails
      } else {
        console.log("Signup notification sent successfully");
        toast({
          title: "Team Notified",
          description: "Signup confirmation sent to team@nationaleconomicschallenge.dedyn.io",
        });
      }

      await supabase.auth.signOut(); // Ensure they log in cleanly
      
      toast({
        title: "Account Created!",
        description: "Your account has been successfully created.",
      });
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
      <div className="text-center mb-4">
        <p className="text-sm text-muted-foreground">
          Almost done! Create a secure password for your account.
        </p>
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          required
          minLength={6}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="mt-1 text-foreground"
        />
      </div>
      <Button type="submit" className="w-full" disabled={loading || password.length < 6}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Create Account
      </Button>
    </form>
  );
};

export default Step3PasswordCreation;
