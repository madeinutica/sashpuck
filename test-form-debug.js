// Test form submission to diagnose the issue
const testFormSubmission = async () => {
  try {
    console.log('Testing form submission...');
    
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      howDidYouHear: 'Testing form submission'
    };
    
    console.log('Sending data:', JSON.stringify(formData, null, 2));
    
    const response = await fetch('http://localhost:3001/api/win-entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('Response body:', responseText);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${responseText}`);
    }
    
    const data = JSON.parse(responseText);
    console.log('✅ Form submission successful!');
    console.log('Parsed response:', data);
    
  } catch (error) {
    console.error('❌ Error during form submission test:', error);
  }
};

testFormSubmission();