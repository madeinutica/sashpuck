// Enhanced email service test script for any provider
const { emailService } = require('./lib/emailService.js');
require('dotenv').config({ path: '.env.local' });

async function testEmailService() {
  console.log('🔍 TESTING EMAIL SERVICE (Any Provider)');
  console.log('=========================================\n');

  // Check environment variables
  console.log('1. CHECKING EMAIL CONFIGURATION:');
  const config = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    notificationEmail: process.env.NOTIFICATION_EMAIL
  };

  console.log('   SMTP Host:', config.host || '❌ Not set');
  console.log('   SMTP Port:', config.port || '❌ Not set (will use 587)');
  console.log('   SMTP User:', config.user ? '✅ Set' : '❌ Not set');
  console.log('   SMTP Pass:', config.pass ? '✅ Set' : '❌ Not set');
  console.log('   Notification Email:', config.notificationEmail || '❌ Not set');

  // Detect provider
  let provider = 'Unknown Provider';
  if (config.host) {
    if (config.host.includes('gmail')) provider = 'Gmail/Google Workspace';
    else if (config.host.includes('outlook') || config.host.includes('office365')) provider = 'Microsoft Outlook';
    else if (config.host.includes('sendgrid')) provider = 'SendGrid';
    else if (config.host.includes('mailgun')) provider = 'Mailgun';
    else if (config.host.includes('yahoo')) provider = 'Yahoo Mail';
    else if (config.host.includes('icloud') || config.host.includes('me.com')) provider = 'Apple iCloud';
    else if (config.host.includes('secureserver')) provider = 'GoDaddy';
    else provider = 'Custom/Business Email';
  }
  console.log('   📧 Detected Provider:', provider);

  if (!config.user || !config.pass || !config.notificationEmail) {
    console.log('\n❌ Email configuration incomplete.');
    console.log('📋 Please update .env.local file with your email provider settings.');
    console.log('📚 See EMAIL_PROVIDERS.md for configuration examples.');
    console.log('🔍 Or run: node detect-provider.js');
    return;
  }

  // Test connection
  console.log('\n2. TESTING EMAIL CONNECTION:');
  try {
    const connectionTest = await emailService.testConnection();
    if (connectionTest) {
      console.log('   ✅ Email service connection successful');
      console.log(`   📧 Connected to: ${config.host}:${config.port}`);
    } else {
      console.log('   ❌ Email service connection failed');
      showTroubleshooting(provider);
      return;
    }
  } catch (error) {
    console.log('   ❌ Connection test error:', error.message);
    showTroubleshooting(provider);
    return;
  }

  // Test sending email
  console.log('\n3. TESTING EMAIL SENDING:');
  try {
    const emailSent = await emailService.sendWinEntryNotification({
      name: 'Test User',
      email: 'test@example.com',
      howDidYouHear: `Email service test for ${provider}`,
      submittedAt: new Date().toISOString()
    });

    if (emailSent) {
      console.log('   ✅ Test email sent successfully!');
      console.log(`   📧 Check your inbox: ${config.notificationEmail}`);
      console.log('   📬 Look in spam folder if not found in inbox');
    } else {
      console.log('   ❌ Failed to send test email');
      showTroubleshooting(provider);
    }
  } catch (error) {
    console.log('   ❌ Email sending error:', error.message);
    showTroubleshooting(provider);
  }

  console.log('\n=========================================');
  console.log('📧 EMAIL SETUP SUMMARY:');
  console.log(`   Provider: ${provider}`);
  console.log(`   Notification Email: ${config.notificationEmail}`);
  console.log('   Forms will now send email notifications!');
  console.log('=========================================');
}

function showTroubleshooting(provider) {
  console.log('\n🔧 TROUBLESHOOTING TIPS:');
  
  switch(provider) {
    case 'Gmail/Google Workspace':
      console.log('   • Enable 2-Factor Authentication');
      console.log('   • Use App Password (not regular password)');
      console.log('   • Check Google Account security settings');
      break;
    case 'Microsoft Outlook':
      console.log('   • Use your regular email password');
      console.log('   • Check if account has 2FA enabled');
      console.log('   • Verify smtp-mail.outlook.com:587');
      break;
    case 'SendGrid':
      console.log('   • Username should be "apikey"');
      console.log('   • Password should be your SendGrid API key');
      console.log('   • Verify API key permissions');
      break;
    case 'Custom/Business Email':
      console.log('   • Contact your hosting provider for SMTP settings');
      console.log('   • Verify server hostname and port');
      console.log('   • Check if authentication is required');
      break;
    default:
      console.log('   • Double-check SMTP host and port');
      console.log('   • Verify username and password');
      console.log('   • Check provider documentation');
  }
  
  console.log('   • Try port 465 with SMTP_SECURE=true if 587 fails');
  console.log('   • Check firewall/antivirus blocking connections');
  console.log('   📚 See EMAIL_PROVIDERS.md for more help');
}

testEmailService().catch(console.error);