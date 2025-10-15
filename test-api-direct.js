const http = require('http');

// Test GET request
const getOptions = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/win-entries',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

console.log('Testing GET request...');
const getReq = http.request(getOptions, (res) => {
  console.log(`GET Status: ${res.statusCode}`);
  console.log(`GET Headers:`, res.headers);
  
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log('GET Response:', data);
    
    // Now test POST request
    testPost();
  });
});

getReq.on('error', (error) => {
  console.error('GET Error:', error.message);
  console.log('Server might not be running or API route might have compilation issues');
});

getReq.end();

function testPost() {
  const postData = JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    howDidYouHear: 'Testing API'
  });

  const postOptions = {
    hostname: 'localhost',
    port: 3001,
    path: '/api/win-entries',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData)
    }
  };

  console.log('\nTesting POST request...');
  const postReq = http.request(postOptions, (res) => {
    console.log(`POST Status: ${res.statusCode}`);
    console.log(`POST Headers:`, res.headers);
    
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      console.log('POST Response:', data);
    });
  });

  postReq.on('error', (error) => {
    console.error('POST Error:', error.message);
  });

  postReq.write(postData);
  postReq.end();
}