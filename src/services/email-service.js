const sender = require('../config/email-config');
const TicketRepository = require('../repository/ticketRepository');

const repo = new TicketRepository();
const sendBasicEmail = ( mailFrom , mailTo , mailSubject, mailBody)=>{
    sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody
    });
}

const fetchPendingEmails = async()=>{
    try {
        const pendingEmails = await repo.get({ status: "PENDING"});
        return pendingEmails;
    } catch (error) {
        console.log('Error in service layer in fetching pending emails')
        throw error ;
    }

}

const updateTicket = async(ticketId , data)=>{
    try {
        const updatedTicket = await repo.update(ticketId , data);
        return updatedTicket;
        
    } catch (error) {
        console.log('Error in updating email')
        throw error ;
        
    }
}
const createNotification = async (data)=>{
    try {
        const response = repo.create(data);
        return response;
        
    } catch (error) {
        console.log("Error in service layer in create Func ", error)
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    createNotification,
    updateTicket
}