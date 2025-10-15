# Email Provider Configuration Guide

## 🎯 **Universal Email Setup**
The form works with **ANY email provider that supports SMTP**. Here are configurations for popular providers:

---

## 📧 **Business Email Providers**

### **Microsoft Office 365 / Outlook Business**
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-business-email@yourdomain.com
SMTP_PASS=your-password
NOTIFICATION_EMAIL=where-to-receive@yourdomain.com
```

### **Google Workspace (Business Gmail)**
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-business@yourdomain.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=notifications@yourdomain.com
```

### **Custom Domain Email (cPanel/Hosting)**
```bash
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password
NOTIFICATION_EMAIL=forms@yourdomain.com
```

---

## 🚀 **Professional Email Services**

### **SendGrid (Recommended for High Volume)**
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.your-sendgrid-api-key-here
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

### **Mailgun**
```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@mg.yourdomain.com
SMTP_PASS=your-mailgun-password
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

### **Amazon SES**
```bash
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-access-key-id
SMTP_PASS=your-ses-secret-access-key
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

### **Postmark**
```bash
SMTP_HOST=smtp.postmarkapp.com
SMTP_PORT=587
SMTP_USER=your-postmark-server-token
SMTP_PASS=your-postmark-server-token
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

---

## 📱 **Personal Email Providers**

### **Yahoo Mail**
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=your-email@yahoo.com
```

### **Hotmail/Outlook.com**
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@hotmail.com
SMTP_PASS=your-password
NOTIFICATION_EMAIL=your-email@hotmail.com
```

### **Apple iCloud**
```bash
SMTP_HOST=smtp.mail.me.com
SMTP_PORT=587
SMTP_USER=your-email@icloud.com
SMTP_PASS=your-app-specific-password
NOTIFICATION_EMAIL=your-email@icloud.com
```

---

## 🏢 **Enterprise/Hosting Providers**

### **GoDaddy Email**
```bash
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

### **Hostinger**
```bash
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

### **Bluehost**
```bash
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-email-password
NOTIFICATION_EMAIL=your-email@yourdomain.com
```

---

## 🔒 **Security & Authentication Tips**

### **Two-Factor Authentication (2FA) Providers**
For providers with 2FA enabled, you'll need **App Passwords**:
- **Gmail**: Google Account → Security → App Passwords
- **Yahoo**: Account Settings → Generate App Password
- **Outlook**: Account Security → App Passwords

### **OAuth2 (Advanced)**
Some providers support OAuth2 instead of passwords:
- More secure than app passwords
- Requires additional setup in Google/Microsoft console
- Better for production environments

---

## 🧪 **Testing Your Configuration**

After setting up any provider, test with:
```bash
node test-email.js
```

## 📞 **Provider-Specific Help**

### **How to Find Your SMTP Settings:**
1. **Search**: "[Your Provider] SMTP settings"
2. **Support Docs**: Check your email provider's help center
3. **Hosting Panel**: Look in email settings (for custom domains)
4. **Contact Support**: Your hosting/email provider can provide settings

### **Common Port Numbers:**
- **587**: Most common (STARTTLS)
- **465**: SSL/TLS
- **25**: Plain (often blocked)
- **2525**: Alternative (some providers)

---

## ✅ **Universal Setup Steps**

1. **Find your provider** in the list above
2. **Copy the configuration** to `.env.local`
3. **Update credentials** with your actual email/password
4. **Set notification email** where you want to receive forms
5. **Test the setup**: `node test-email.js`
6. **Submit a form** to test the complete workflow

**The form will work with ANY email provider that supports SMTP!**