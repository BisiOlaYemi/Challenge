import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aqlaprrqcfzrorpiveuv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxbGFwcnJxY2Z6cm9ycGl2ZXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExNzkwMjQsImV4cCI6MjAwNjc1NTAyNH0.aUKzNlgjBG21BKta9H0VS2Q14zKc1UTHxYHj_CaD34o'; // Replace with your Supabase API key

 
const storage = process.browser ? localStorage : null; // Use localStorage on the client-side
const supabase = createClient(supabaseUrl, supabaseKey, { persistSession: true, storage });

export default supabase;
