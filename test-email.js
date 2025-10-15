// Email service test script
const { emailService } = require('./lib/emailService.js');
require('dotenv').config({ path: '.env.local' });

async function testEmailService() {
  console.log('🔍 TESTING EMAIL SERVICE');
  console.log('========================\n');

  // Check environment variables
  console.log('1. CHECKING EMAIL CONFIGURATION:');
  console.log('   SMTP Host:', process.env.SMTP_HOST || '❌ Not set');
  console.log('   SMTP Port:', process.env.SMTP_PORT || '❌ Not set');
  console.log('   SMTP User:', process.env.SMTP_USER ? '✅ Set' : '❌ Not set');
  console.log('   SMTP Pass:', process.env.SMTP_PASS ? '✅ Set' : '❌ Not set');
  console.log('   Notification Email:', process.env.NOTIFICATION_EMAIL || '❌ Not set');

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.NOTIFICATION_EMAIL) {
    console.log('\n❌ Email configuration incomplete. Please update .env.local file.');
    return;
  }

  // Test connection
  console.log('\n2. TESTING EMAIL CONNECTION:');
  try {
    const connectionTest = await emailService.testConnection();
    if (connectionTest) {
      console.log('   ✅ Email service connection successful');
    } else {
      console.log('   ❌ Email service connection failed');
      return;
    }
  } catch (error) {
    console.log('   ❌ Connection test error:', error.message);
    return;
  }

  // Test sending email
  console.log('\n3. TESTING EMAIL SENDING:');
  try {
    const emailSent = await emailService.sendWinEntryNotification({
      name: 'Test User',
      email: 'test@example.com',
      howDidYouHear: 'Email service test',
      submittedAt: new Date().toISOString()
    });

    if (emailSent) {
      console.log('   ✅ Test email sent successfully!');
      console.log('   📧 Check your notification email inbox.');
    } else {
      console.log('   ❌ Failed to send test email');
    }
  } catch (error) {
    console.log('   ❌ Email sending error:', error.message);
  }

  console.log('\n========================');
  console.log('📧 EMAIL SETUP SUMMARY:');
  console.log('   Forms will now send email notifications');
  console.log('   to:', process.env.NOTIFICATION_EMAIL);
  console.log('========================');
}

testEmailService().catch(console.error);