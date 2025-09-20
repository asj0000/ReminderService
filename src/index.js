const express = require('express');
const bodyParser = require('body-parser');
const { PORT , REMINDER_BINDING_KEY } = require('../src/config/server-config');
const { sendBasicEmail  } = require('./services/email-service');
const TicketController = require('./controller/ticket-controller');
const job = require('./utitls/job')   
const { subscribeMessage , createChannel } = require('./utitls/messageQueue');
const EmailService = require('./services/email-service');


const app = express()
const setupAndStartServer = async() =>{

    app.use( bodyParser.json());
    app.use( bodyParser.urlencoded({ extended: true}));

    app.post('/api/v1/tickets/', TicketController.create);

    const channel = await createChannel();
    subscribeMessage( channel , EmailService.subscribeEvent , REMINDER_BINDING_KEY );

    app.listen( PORT, async()=>{
        console.log( `Server started at ${PORT}`)
        // job();
        // sendBasicEmail(
        //     'support@mail.com',  
        //     'notificationservicemailid@gmail.com',
        //     'Testing Email service',
        //     'This is a test email, just used for testing purpose'
        // )
    })

}

setupAndStartServer();
