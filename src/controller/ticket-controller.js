const TicketService = require('../services/email-service');

const create = async( req, res)=>{
    try {
        const response = await TicketService.createNotification( req.body );
        return res.status( 201 ).json({
            success: true ,
            data: response,
            err: {},
            message: 'Successfully created a notification ticket'

        })
    } catch (error) {
        return res.status(500).json({
            success: false ,
            data: {},
            err: error,
            message: 'Failed to create a notification ticket'
        })
    }

}

const get = async( req , res)=>{
    try {
        const response = await TicketService.fetchPendingEmails( req.body );
        return res.status( 200 ).json({
            success: true ,
            data: response,
            err: {},
            message: 'Successfully fetched notification ticket'

        })
        
    } catch (error) {
        return res.status(500).json({
            success: false ,
            data: {},
            err: error,
            message: 'Failed to get notification ticket'
        })
        
    }
}

module.exports = {
    create,
    get
}