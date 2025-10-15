// Email provider detection and configuration helper
require('dotenv').config({ path: '.env.local' });

function detectEmailProvider() {
  console.log('🔍 EMAIL PROVIDER DETECTION & SETUP HELPER');
  console.log('==========================================\n');

  const smtpHost = process.env.SMTP_HOST;
  const smtpUser = process.env.SMTP_USER;

  if (!smtpHost && !smtpUser) {
    console.log('❌ No email configuration detected.');
    console.log('📋 Please configure your email provider in .env.local\n');
    showQuickSetupOptions();
    return;
  }

  // Detect provider based on SMTP host or user email domain
  let provider = 'Unknown';
  let recommendations = [];

  if (smtpHost) {
    if (smtpHost.includes('gmail')) {
      provider = 'Gmail/Google Workspace';
      recommendations = [
        '✅ Enable 2-Factor Authentication',
        '🔑 Generate App Password (not your regular password)',
        '🌐 Use smtp.gmail.com:587'
      ];
    } else if (smtpHost.includes('outlook') || smtpHost.includes('office365')) {
      provider = 'Microsoft Outlook/Office 365';
      recommendations = [
        '🔑 Use your regular email password',
        '🌐 Use smtp-mail.outlook.com:587',
        '📧 Works with both personal and business accounts'
      ];
    } else if (smtpHost.includes('sendgrid')) {
      provider = 'SendGrid';
      recommendations = [
        '🔑 Use "apikey" as username',
        '🔐 Use your SendGrid API key as password',
        '📈 Great for high-volume sending'
      ];
    } else if (smtpHost.includes('mailgun')) {
      provider = 'Mailgun';
      recommendations = [
        '🔑 Use postmaster@mg.yourdomain.com format',
        '🔐 Use your Mailgun password',
        '📊 Good for transactional emails'
      ];
    } else if (smtpHost.includes('yahoo')) {
      provider = 'Yahoo Mail';
      recommendations = [
        '🔑 Enable App Passwords in Yahoo settings',
        '🌐 Use smtp.mail.yahoo.com:587'
      ];
    } else if (smtpHost.includes('icloud') || smtpHost.includes('me.com')) {
      provider = 'Apple iCloud';
      recommendations = [
        '🔑 Generate App-Specific Password',
        '🌐 Use smtp.mail.me.com:587'
      ];
    } else if (smtpHost.includes('secureserver') || smtpHost.includes('godaddy')) {
      provider = 'GoDaddy Email';
      recommendations = [
        '🌐 Use smtpout.secureserver.net:587',
        '🔑 Use your full email and password'
      ];
    }
  }

  console.log(`📧 Detected Provider: ${provider}`);
  console.log(`🌐 SMTP Host: ${smtpHost || 'Not set'}`);
  console.log(`👤 SMTP User: ${smtpUser || 'Not set'}`);
  console.log(`📬 Notification Email: ${process.env.NOTIFICATION_EMAIL || 'Not set'}`);

  if (recommendations.length > 0) {
    console.log('\n💡 Provider-specific recommendations:');
    recommendations.forEach(rec => console.log(`   ${rec}`));
  }

  console.log('\n🧪 Test your configuration:');
  console.log('   node test-email.js');

  console.log('\n📚 Need different provider? Check:');
  console.log('   EMAIL_PROVIDERS.md');
}

function showQuickSetupOptions() {
  console.log('🚀 QUICK SETUP OPTIONS:\n');

  console.log('1️⃣  GMAIL (Personal/Business):');
  console.log('   SMTP_HOST=smtp.gmail.com');
  console.log('   SMTP_PORT=587');
  console.log('   SMTP_USER=your-email@gmail.com');
  console.log('   SMTP_PASS=your-app-password\n');

  console.log('2️⃣  MICROSOFT OUTLOOK:');
  console.log('   SMTP_HOST=smtp-mail.outlook.com');
  console.log('   SMTP_PORT=587');
  console.log('   SMTP_USER=your-email@outlook.com');
  console.log('   SMTP_PASS=your-password\n');

  console.log('3️⃣  CUSTOM DOMAIN (Hosting):');
  console.log('   SMTP_HOST=mail.yourdomain.com');
  console.log('   SMTP_PORT=587');
  console.log('   SMTP_USER=your-email@yourdomain.com');
  console.log('   SMTP_PASS=your-email-password\n');

  console.log('4️⃣  SENDGRID (Professional):');
  console.log('   SMTP_HOST=smtp.sendgrid.net');
  console.log('   SMTP_PORT=587');
  console.log('   SMTP_USER=apikey');
  console.log('   SMTP_PASS=your-sendgrid-api-key\n');

  console.log('📝 Add your choice to .env.local file');
  console.log('📚 See EMAIL_PROVIDERS.md for more options');
}

detectEmailProvider();