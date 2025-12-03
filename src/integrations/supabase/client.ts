// Supabase client configuration
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://hidecvjadhivlyofyovt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZGVjdmphZGhpdmx5b2Z5b3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ3MjkyOTAsImV4cCI6MjA4MDMwNTI5MH0.KkDS1ARhR-0BPA5GbQgiWMbjWmEPP-5vzeIy9FT-qVA";

// Create and export the Supabase client
export const supabase: SupabaseClient<Database> = createClient<Database>(
  supabaseUrl,
  supabaseKey,
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);
