// Test form submission using Windows-compatible approach
const https = require('https');
const http = require('http');

const postData = JSON.stringify({
  name: 'Test User',
  email: 'test@example.com',
  howDidYouHear: 'Testing the form submission API'
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/win-entries',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

console.log('🔍 Testing API endpoint: http://localhost:3001/api/win-entries');

const req = http.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers: ${JSON.stringify(res.headers, null, 2)}`);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('Response body:', data);
    try {
      const response = JSON.parse(data);
      if (res.statusCode === 200) {
        console.log('✅ API endpoint is working!');
      } else {
        console.log('❌ API returned error:', response.message);
      }
    } catch (e) {
      console.log('Response (raw):', data);
    }
  });
});

req.on('error', (e) => {
  console.log('❌ Request failed:', e.message);
});

req.write(postData);
req.end();