const scheduleEmail = require('./scheduler');

const now = new Date();
const targetDate = new Date(now.getTime() + 1 * 60 * 1000); // pas 1 minute

const emailData = {
  to: 'benetdemaj4@gmail.com',
  subject: 'Test Email',
  body: 'Ky është një test pas 1 minute!',
  date: targetDate,
};

scheduleEmail(emailData.date, () => {
  const sendEmail = require('./mailer');
  sendEmail(emailData);
});

console.log(`✅ Email scheduled for: ${targetDate.toLocaleString()}`);
