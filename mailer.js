const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benetdemaj4@gmail.com',
    pass: 'rxajjirmpvumvdcj', // përdor app password nëse ke 2FA
  },
});

function sendEmail({ to, subject, body }) {
  const mailOptions = {
    from: 'benetdemaj4@gmail.com',
    to: to, // ✅ mos e harro këtë!
    subject: subject,
    text: body,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Email dështoi:', error);
    } else {
      console.log('📨 Email u dërgua me sukses:', info.response);
    }
  });
}

module.exports = sendEmail;
