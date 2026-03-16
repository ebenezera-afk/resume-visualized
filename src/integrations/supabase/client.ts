import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://gueeyawifjifusztuzay.supabase.co';
const supabaseAnonKey = 'sb_publishable_f6vKHE6txcVCsNYluLR7wQ_BZuphH8K';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);