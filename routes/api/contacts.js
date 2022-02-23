const express = require("express");
const router = express.Router();

const {ctrlWrapper}=require('../../middlewares/ctrlWrapper')
const { contactValidation, statusValidation } = require("../../middlewares/validation.js")
const {contacts:ctrl}=require('../../controllers')


router.get("/", ctrlWrapper(ctrl.listContacts) );

router.get("/:contactId", ctrlWrapper(ctrl.getContactById) );

router.post("/", contactValidation, ctrlWrapper(ctrl.addContact) );

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put("/:contactId", contactValidation, ctrlWrapper(ctrl.updateContact) );

router.patch('/:contactId/favorite', statusValidation, ctrlWrapper(ctrl.updateStatusContact))

module.exports = router;
