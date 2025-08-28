const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('../src/config/server-config');
const { sendBasicEmail } = require('./services/email-service');

const app = express()
const setupAndStartServer = () =>{

    app.use( bodyParser.json());
    app.use( bodyParser.urlencoded({ extended: true}));

    app.listen( PORT, ()=>{
        console.log( `Server started at ${PORT}`)

        // sendBasicEmail(
        //     'support@mail.com',
        //     'notificationservicemailid@gmail.com',
        //     'Testing Email service',
        //     'This is a test email, just used for testing purpose'
        // )
    })

}

setupAndStartServer();
