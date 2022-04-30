const sgMail = require('@sendgrid/mail')


const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async (data) => {
    const email = { ...data, from: "dp030492sos@gmail.com" }
    
    try {
        await sgMail.send(email)
    } catch (error) {
console.log(error.message)
    }
}

module.exports = {sendEmail};