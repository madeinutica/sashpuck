import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  howDidYouHear: string;
  submittedAt: string;
}

class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendWinEntryNotification(data: EmailData): Promise<boolean> {
    try {
      const { name, email, howDidYouHear, submittedAt } = data;

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #ff4444; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #555; }
            .field-value { margin-top: 5px; }
            .footer { text-align: center; margin-top: 20px; color: #777; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Win Contest Entry!</h1>
            </div>
            <div class="content">
              <h2>Entry Details</h2>
              
              <div class="field">
                <div class="field-label">Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Email:</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">How did they hear about us:</div>
                <div class="field-value">${howDidYouHear}</div>
              </div>
              
              <div class="field">
                <div class="field-label">Submitted at:</div>
                <div class="field-value">${new Date(submittedAt).toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>This entry has been automatically saved to your database.</p>
              <p>New York Sash - Win Contest Entry System</p>
            </div>
          </div>
        </body>
        </html>
      `;

      const textContent = `
New Win Contest Entry!

Name: ${name}
Email: ${email}
How did they hear about us: ${howDidYouHear}
Submitted at: ${new Date(submittedAt).toLocaleString()}

This entry has been automatically saved to your database.
      `;

      const mailOptions = {
        from: `"New York Sash Contest" <${process.env.SMTP_USER}>`,
        to: process.env.NOTIFICATION_EMAIL,
        subject: `🎉 New Win Contest Entry from ${name}`,
        text: textContent,
        html: htmlContent,
      };

      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      console.log('Email service connection verified');
      return true;
    } catch (error) {
      console.error('Email service connection failed:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();