# Email Setup Guide for Win Contest Form

## 📧 Email Functionality Added!

The win contest form now sends email notifications when someone submits an entry. Here's how to set it up:

## 🔧 Setup Instructions

### Option 1: Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Update `.env.local`**:
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-character-app-password
   NOTIFICATION_EMAIL=where-to-receive-notifications@gmail.com
   ```

### Option 2: Business Email Services

#### SendGrid
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Mailgun
```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-username
SMTP_PASS=your-mailgun-password
```

#### Microsoft Outlook/Office 365
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-outlook-email@outlook.com
SMTP_PASS=your-password
```

## 🎯 What Happens Now

When someone submits the win contest form:

1. **✅ Saves to Database** (Supabase - as before)
2. **📧 Sends Email Notification** (NEW!) to your specified email address

## 📧 Email Content

The email notification includes:
- Participant's name
- Participant's email address
- How they heard about you
- Submission timestamp
- Styled HTML format for easy reading

## 🧪 Testing

After updating your environment variables:

1. **Test the email service**:
   ```bash
   node test-email.js
   ```

2. **Test the full form**:
   - Go to `/win` page
   - Submit a test entry
   - Check your notification email

## 🔒 Security Notes

- **Never commit** email credentials to git
- Use **App Passwords** for Gmail (not your main password)
- Consider using **dedicated email services** for production
- Store credentials in **environment variables only**

## 🚀 Ready to Use!

Once configured, every form submission will:
- Save to your Supabase database
- Send an email notification to your inbox
- Show success message to the user

No additional code changes needed!