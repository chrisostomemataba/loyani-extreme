import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, safariName } = req.body;

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email provider (e.g., Gmail, Outlook)
      auth: {
        user: process.env.EMAIL_USER, // Add your email to .env.local
        pass: process.env.EMAIL_PASS, // Add your email password to .env.local
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_RECEIVER, // Add your destination email in .env.local
      subject: `Inquiry about ${safariName}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ success: false });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
