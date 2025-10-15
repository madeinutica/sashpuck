// Test form submission via API (like real form would do)
async function testFormSubmissionAPI() {
  console.log('🧪 TESTING FORM SUBMISSION VIA API');
  console.log('==================================\n');

  const testEntries = [
    {
      name: 'John Smith',
      email: 'john.smith@example.com',
      howDidYouHear: 'Google search for home improvement companies'
    },
    {
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      howDidYouHear: 'Referral from a friend who had their windows replaced'
    },
    {
      name: 'Mike Wilson',
      email: 'mwilson@company.com',
      howDidYouHear: 'Saw your truck in my neighborhood'
    }
  ];

  for (const entry of testEntries) {
    try {
      console.log(`📝 Submitting entry for ${entry.name}...`);
      
      const response = await fetch('http://localhost:3001/api/win-entries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry)
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log(`✅ Success: ${result.message}`);
      } else {
        console.log(`❌ Failed: ${result.message}`);
      }
    } catch (error) {
      console.log(`❌ Network error for ${entry.name}:`, error.message);
    }
  }

  console.log('\n🎉 Test submissions completed!');
  console.log('📋 Visit /admin/win-entries to see them in the admin interface');
  console.log('🌐 Admin URL: http://localhost:3001/admin/win-entries');
}

testFormSubmissionAPI();