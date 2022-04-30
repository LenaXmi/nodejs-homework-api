const { User } = require("../../models");

const verifyEmail = async (req, res, next) => { 
    
    const { verificationToken } = req.params
    const user = await User.findOne({ verificationToken })
    
    if (!user) {
        res.status(401).json({
            status: "Not found",
            code: 401,
            message:"User not found"
        })
    }

    await User.findByIdAndUpdate(user._id,{verify:true, verificationToken:null})

    res.status(200).json({
        status: "success",
        code: 200,
        message:"Verification successful"
    })
}


module.exports = verifyEmail;