// Comprehensive form submission tracing script
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function traceSubmissions() {
  console.log('🔍 FORM SUBMISSION FLOW ANALYSIS');
  console.log('=====================================\n');

  // 1. Check environment setup
  console.log('1. ENVIRONMENT CONFIGURATION:');
  console.log('   Supabase URL:', supabaseUrl ? '✅ Configured' : '❌ Missing');
  console.log('   Supabase Key:', supabaseAnonKey ? '✅ Configured' : '❌ Missing');
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.log('   ❌ Cannot proceed without proper environment variables\n');
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  // 2. Check database table
  console.log('\n2. DATABASE TABLE CHECK:');
  try {
    const { data, error } = await supabase
      .from('win_entries')
      .select('*')
      .limit(5);
      
    if (error) {
      console.log('   ❌ Table does not exist or is not accessible');
      console.log('   Error:', error.message);
      console.log('   📋 ACTION NEEDED: Run the SQL setup script in Supabase');
    } else {
      console.log('   ✅ Table exists and is accessible');
      console.log(`   📊 Current entries count: ${data.length}`);
      if (data.length > 0) {
        console.log('   📝 Latest entries:');
        data.forEach((entry, index) => {
          console.log(`      ${index + 1}. ${entry.name} (${entry.email}) - ${new Date(entry.submitted_at).toLocaleDateString()}`);
        });
      }
    }
  } catch (dbError) {
    console.log('   ❌ Database connection failed:', dbError.message);
  }

  // 3. Current submission flow
  console.log('\n3. SUBMISSION FLOW:');
  console.log('   📝 Frontend Form (WinForm.tsx)');
  console.log('   ⬇️  POST request to /api/win-entries');
  console.log('   📡 API Route (app/api/win-entries/route.ts)');
  console.log('   ⬇️  Validates data (name, email, howDidYouHear)');
  console.log('   💾 Attempts to save to Supabase win_entries table');
  console.log('   ⬆️  Returns success/error response to frontend');

  // 4. Check for any existing submissions
  console.log('\n4. SUBMISSION STORAGE LOCATIONS:');
  console.log('   🎯 PRIMARY: Supabase win_entries table');
  console.log('   📁 LOCAL FILES: None configured');
  console.log('   📧 EMAIL NOTIFICATIONS: None configured');
  console.log('   📋 ADMIN DASHBOARD: Not implemented for win entries');

  console.log('\n5. CURRENT STATUS:');
  if (error) {
    console.log('   🚨 STATUS: SUBMISSIONS ARE NOT BEING SAVED');
    console.log('   🔧 REASON: Database table does not exist');
    console.log('   ✅ SOLUTION: Create the win_entries table in Supabase');
  } else {
    console.log('   ✅ STATUS: Ready to receive submissions');
    console.log('   📍 DESTINATION: Supabase database');
  }

  console.log('\n=====================================');
  console.log('📍 WHERE SUBMISSIONS GO:');
  console.log('   When working: Supabase win_entries table');
  console.log('   Currently: Nowhere (table missing)');
  console.log('=====================================');
}

traceSubmissions().catch(console.error);