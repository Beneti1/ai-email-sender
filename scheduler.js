const cron = require('node-cron');

function scheduleEmail(date, task) {
  const job = cron.schedule(
    `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} *`,
    task,
    { scheduled: true }
  );
  console.log('✅ Email scheduled at:', date);
  return job;
}

module.exports = scheduleEmail;
