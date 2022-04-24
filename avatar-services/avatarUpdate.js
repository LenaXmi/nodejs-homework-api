const { User } = require("../models");

const avatarUpdate = async (id, avatarURL) => { 
     const user = await User.findById(id);
     if (!user) {
          throw new Error('User not found');
     }
     user.avatar = avatarURL;
     await user.save();
     return user;
}


module.exports = {avatarUpdate};