import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types/database";
require('dotenv').config();

 const supabaseUrl = process.env.VITE_SUPABASE_URL??'';
 const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY??'';



export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
