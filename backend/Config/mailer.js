const nodemailer = require('nodemailer')

const mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GOOGLE_APP_PASS
    }
})

module.exports = mailTransporter