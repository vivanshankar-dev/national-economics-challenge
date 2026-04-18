import { createClient } from '@supabase/supabase-js';

// Access environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Diagnostic validation
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Supabase Configuration Error: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing from environment variables.');
} else {
  try {
    new URL(supabaseUrl);
    console.log('✅ Supabase URL format is valid.');
  } catch (e) {
    console.error('❌ Supabase Configuration Error: VITE_SUPABASE_URL is malformed. Ensure it starts with http:// or https://');
  }
}

// Create a single supabase client for interacting with your database
// Using the public anon key for safe, browser-side operations
export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '', {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  global: {
    fetch: (...args) => {
      return fetch(...args).catch(err => {
        console.error('❌ Supabase Global Fetch Error (Network/Connection issue):', err);
        throw err;
      });
    }
  }
});