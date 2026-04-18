import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();

  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSession = useCallback(async (session) => {
    setSession(session);
    setUser(session?.user ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!supabase) {
      console.error('❌ Supabase Auth Error: Supabase client not initialized.');
      setLoading(false);
      return;
    }

    const getSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) {
          console.error('❌ Supabase Get Session Error:', error.message);
          throw error;
        }
        handleSession(session);
        console.log('✅ Supabase Auth: Initial session loaded successfully.');
      } catch (err) {
        console.error('❌ Supabase Auth Initialization Error:', err);
        handleSession(null);
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`ℹ️ Supabase Auth State Changed: ${event}`, session ? 'User present' : 'No user');
        if (event === 'SIGNED_OUT' || event === 'USER_DELETED') {
          handleSession(null);
        } else {
          handleSession(session);
        }
      }
    );

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, [handleSession]);

  const signUp = useCallback(async (email, password, options) => {
    if (!supabase) return { error: { message: "Supabase client not initialized" } };

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options,
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('❌ Sign Up Error:', error);
      toast({
        variant: "destructive",
        title: "Sign up Failed",
        description: error.message || "Something went wrong",
      });
      return { error };
    }
  }, [toast]);

  const signIn = useCallback(async (email, password) => {
    if (!supabase) return { error: { message: "Supabase client not initialized" } };

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error('❌ Sign In Error:', error);
      toast({
        variant: "destructive",
        title: "Sign in Failed",
        description: error.message || "Something went wrong",
      });
      return { error };
    }
  }, [toast]);

  const signOut = useCallback(async () => {
    if (!supabase) return { error: { message: "Supabase client not initialized" } };

    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error('❌ Sign Out Error:', error);
      toast({
        variant: "destructive",
        title: "Sign out Failed",
        description: error.message || "Something went wrong",
      });
      return { error };
    }
  }, [toast]);

  const value = useMemo(() => ({
    user,
    session,
    loading,
    signUp,
    signIn,
    signOut,
  }), [user, session, loading, signUp, signIn, signOut]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};