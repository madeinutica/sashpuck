// Simple test script to check form submission
const testFormSubmission = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/win-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        howDidYouHear: 'Testing the form submission with real Supabase'
      })
    });

    const result = await response.json();
    console.log('Response status:', response.status);
    console.log('Response body:', result);

    if (response.ok) {
      console.log('✅ Form submission successful!');
    } else {
      console.log('❌ Form submission failed:', result.message);
    }
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }
};

testFormSubmission();