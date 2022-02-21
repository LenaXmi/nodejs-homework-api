const express = require("express");
const router = express.Router();
const {     getContacts,
    getOneContactById,
    addNewContact,
    deleteContactById,
    updateExistingContact } = require("../../controllers/contactsController");


const {contactValidation}=require("../../middlewares/validation.js")



router.get("/", getContacts );

router.get("/:contactId", getOneContactById);

router.post("/", contactValidation,  addNewContact);

router.delete("/:contactId",deleteContactById);

router.put("/:contactId", contactValidation, updateExistingContact);

module.exports = router;
