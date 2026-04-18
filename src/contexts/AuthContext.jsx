
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const checkUserStatus = async (sessionUser) => {
    if (sessionUser) {
      try {
        const { data, error } = await supabase
          .from('participants')
          .select('email_verified')
          .eq('id', sessionUser.id)
          .single();
          
        if (!error && data) {
          setIsEmailVerified(data.email_verified);
        } else {
          setIsEmailVerified(false);
        }
      } catch (err) {
        setIsEmailVerified(false);
      }
    } else {
      setIsEmailVerified(false);
    }
    setUser(sessionUser);
    setLoading(false);
  };

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      checkUserStatus(session?.user ?? null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoading(true);
      checkUserStatus(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      
      // Check email verification status before finalizing login
      const { data: pData } = await supabase
        .from('participants')
        .select('email_verified')
        .eq('id', data.user.id)
        .single();

      if (pData && pData.email_verified === false) {
        await supabase.auth.signOut();
        throw new Error("Please verify your email before logging in");
      }

      setIsEmailVerified(true);
      toast({
        title: "Login Successful",
        description: "Welcome back!",
      });
      return data;
    } catch (error) {
      toast({
        title: "Login Failed",
        description: error.message,
        variant: "destructive"
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out."
      });
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  const getCurrentUser = () => user;

  const value = {
    user,
    isAuthenticated: !!user,
    isEmailVerified,
    login,
    logout,
    getCurrentUser,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
