const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL_ID: process.env.SMTP_MAIL_ID,
    PASSWORD: process.env.SMTP_PWD,
    MESSAGE_BROKER_URL:process.env.MESSAGE_BROKER_URL,
    EXCHANGE_NAME: process.env.EXCHANGE_NAME,
    REMINDER_BINDING_KEY: process.env.REMINDER_BINDING_KEY,
}