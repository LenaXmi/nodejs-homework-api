const express = require("express");
const router = express.Router();



const {ctrlWrapper}=require('../../middlewares/ctrlWrapper')
const { contactValidation } = require("../../middlewares/validation.js")
const {contacts:ctrl}=require('../../controllers')


router.get("/", ctrlWrapper(ctrl.listContacts) );

// router.get("/:contactId", getOneContactById);

router.post("/", contactValidation, ctrlWrapper(ctrl.addContact) );

// router.delete("/:contactId",deleteContactById);

// router.put("/:contactId", contactValidation, updateExistingContact);

module.exports = router;
