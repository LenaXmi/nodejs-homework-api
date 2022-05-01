const { User } = require("../../models");
const {sendEmail} = require('../../helpers/sendEmail')
const reverifyEmail = async (req, res, next) => {
    const { email } = req.body
    const{verificationToken} = req.params
    const user = await User.findOne({ email })
    
    if (user&&user.verify) {
        res.status(400).json({
            status: "Bad request",
            code: 400,
            message:'Verification has already been passed'
        })
    }

      const mail = {
    to: email,
    subject: "Confirmation",
    html:`<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm your email</a>`
}

  await sendEmail(mail)
    res.status(200).json({
      status:'success',
        code: 200,
      message: "Verification email sent"
    })

}

module.exports = reverifyEmail;