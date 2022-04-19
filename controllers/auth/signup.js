const { User } = require("../../models");
const bcrypt = require('bcryptjs')

const signup = async (req, res, next) => {
  const { email, password, avatar } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    res.status(409).json({
      status: "conflict",
      code: 409,
      message: "Email in use",
    });
  }
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const newUser = await User.create({ email, password: hashPassword, avatar });
  
    res.status(201).json({
        status: 'success',
        code: 201,
        data: {
          user: {
            email: newUser.email,
            subscription: newUser.subscription,
            avatar: newUser.avatar,
         }
        }
    })
};

module.exports = signup;
