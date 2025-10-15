// Database setup test script
const { createClient } = require('@supabase/supabase-js');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function testDatabase() {
  console.log('🔍 Testing Supabase connection...');
  console.log('URL:', supabaseUrl ? '✅ Set' : '❌ Missing');
  console.log('Key:', supabaseAnonKey ? '✅ Set' : '❌ Missing');
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.log('❌ Environment variables not properly configured');
    return;
  }
  
  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  
  // Test 1: Check if table exists
  console.log('\n🔍 Testing win_entries table...');
  const { data, error } = await supabase
    .from('win_entries')
    .select('*')
    .limit(1);
    
  if (error) {
    console.log('❌ Table access failed:', error.message);
    console.log('🔧 You need to run the SQL setup script in Supabase dashboard');
    return;
  }
  
  console.log('✅ win_entries table exists and is accessible!');
  
  // Test 2: Try to insert a test record
  console.log('\n🔍 Testing insert operation...');
  const { data: insertData, error: insertError } = await supabase
    .from('win_entries')
    .insert([{
      name: 'Test User',
      email: 'test@example.com',
      how_did_hear: 'Database test script'
    }])
    .select();
    
  if (insertError) {
    console.log('❌ Insert failed:', insertError.message);
    return;
  }
  
  console.log('✅ Insert successful!', insertData);
  
  // Test 3: Clean up test record
  if (insertData && insertData[0]) {
    const { error: deleteError } = await supabase
      .from('win_entries')
      .delete()
      .eq('id', insertData[0].id);
      
    if (!deleteError) {
      console.log('✅ Test record cleaned up');
    }
  }
  
  console.log('\n🎉 All tests passed! Form submission should work correctly.');
}

testDatabase().catch(console.error);