const express = require("express");
const router = express.Router();

const {  ctrlWrapper } = require('../../middlewares/ctrlWrapper')
const{auth}=require('../../middlewares/auth')
const { contactValidation, statusValidation } = require("../../middlewares/validation.js")
const {contacts:ctrl}=require('../../controllers')


router.get("/", auth, ctrlWrapper(ctrl.listContacts) );

router.get("/:contactId", auth, ctrlWrapper(ctrl.getContactById) );

router.post("/", auth, contactValidation, ctrlWrapper(ctrl.addContact) );

router.delete("/:contactId", auth, ctrlWrapper(ctrl.removeContact));

router.put("/:contactId",auth, contactValidation, ctrlWrapper(ctrl.updateContact) );

router.patch('/:contactId/favorite', auth, statusValidation, ctrlWrapper(ctrl.updateStatusContact))

module.exports = router;
