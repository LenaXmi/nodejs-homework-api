const AvatarService = require('../../avatar-services/avatarService');
const LocalStorage = require('../../avatar-services/localStorage');

const avatarController = async (req, res, next) => {
    const avatarService = new AvatarService(LocalStorage, req.file, req.user);

    const avatarURL = await avatarService.update();
    
        if (!avatarURL) {
         res.status(401).json({
            status: 'Unauthorized',
            code: 401,
            message:'Not authorized'
        })    
    }
    res.status(200).json({
        status: 'success',
        code: 200,
        data: {
            avatar:avatarURL
        },
        message:'avatar updated'
    });
}

module.exports = avatarController;