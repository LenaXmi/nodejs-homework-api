const express = require("express");
const router = express.Router();


const { ctrlWrapper } = require('../../middlewares/ctrlWrapper');
const upload = require('../../middlewares/upload');
const { auth } = require('../../middlewares/auth');
const { subscriptionValidation } = require('../../middlewares/validation')
const {verifyValidation} = require('../../middlewares/validation')
const { users: ctrl } = require('../../controllers');


router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));
router.post('/verify', verifyValidation, ctrlWrapper(ctrl.reverifyEmail))
router.get('/verify/:verificationToken', ctrlWrapper(ctrl.verifyEmail))
router.patch('/subscription', auth, subscriptionValidation, ctrlWrapper(ctrl.subscriptionUpdate))
router.patch('/avatar', auth,  upload.single('avatar'), ctrlWrapper(ctrl.avatarController))

module.exports = router;