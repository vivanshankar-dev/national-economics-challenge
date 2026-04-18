import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pbnyuvrzqiynietxnsqk.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBibnl1dnJ6cWl5bmlldHhuc3FrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgwMzYyMjIsImV4cCI6MjA4MzYxMjIyMn0.EbMwAo1K6t0ICIQ7wRmnIgJiB05XAE7jaYIZsbIsXds';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
