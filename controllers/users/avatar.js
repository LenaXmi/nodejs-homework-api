const AvatarService = require('../../avatar-services');
const LocalStorage = require('../../avatar-services');

const avatar = async (req, res, next) => {
    const avatarService = new AvatarService(LocalStorage, req.file, req.user);

  const  avatarURL = await avatarService.update();
    res.status(200).json({
        status: 'success',
        code: 200,
        data: {
            avatar:avatarURL
        },
        message:'avatar updated'
    });
}

module.exports = avatar;