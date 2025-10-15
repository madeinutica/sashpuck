// Create a test submission for the admin interface
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function createTestSubmission() {
  console.log('🧪 CREATING TEST SUBMISSION FOR ADMIN DEMO');
  console.log('==========================================\n');

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    console.log('❌ Supabase configuration missing');
    return;
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const testEntries = [
      {
        name: 'John Smith',
        email: 'john.smith@example.com',
        how_did_hear: 'Google search for home improvement companies',
        submitted_at: new Date().toISOString()
      },
      {
        name: 'Sarah Johnson',
        email: 'sarah.j@email.com',
        how_did_hear: 'Referral from a friend who had their windows replaced',
        submitted_at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() // Yesterday
      },
      {
        name: 'Mike Wilson',
        email: 'mwilson@company.com',
        how_did_hear: 'Saw your truck in my neighborhood',
        submitted_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString() // 2 days ago
      }
    ];

    for (const entry of testEntries) {
      const { data, error } = await supabase
        .from('win_entries')
        .insert([entry])
        .select();

      if (error) {
        console.log(`❌ Failed to create entry for ${entry.name}:`, error.message);
      } else {
        console.log(`✅ Created test entry for ${entry.name}`);
      }
    }

    console.log('\n🎉 Test submissions created!');
    console.log('📋 Visit /admin/win-entries to see them in the admin interface');
    console.log('🌐 Admin URL: http://localhost:3001/admin/win-entries');

  } catch (error) {
    console.error('❌ Error creating test submissions:', error);
  }
}

createTestSubmission();