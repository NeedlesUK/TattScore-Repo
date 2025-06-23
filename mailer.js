const nodemailer = require('nodemailer');
require('dotenv').config();

const mailer = nodemailer.createTransport({
  service: 'gmail', // or use your SMTP provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

module.exports = mailer;