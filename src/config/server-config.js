const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL_ID: process.env.SMTP_MAIL_ID,
    PASSWORD: process.env.SMTP_PWD
}