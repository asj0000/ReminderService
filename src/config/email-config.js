 const nodemailer = require('nodemailer');
 const { EMAIL_ID , PASSWORD } = require('../config/server-config');
 const sender = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_ID,
        pass: PASSWORD
    }
 })

 module.exports = sender;