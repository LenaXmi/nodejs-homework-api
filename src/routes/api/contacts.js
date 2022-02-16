const {
 getContacts,
    getOneContactById,
    addNewContact,
    deleteContactById,
    updateExistingContact
} = require("../../controllers/contactsController.js");
const express = require("express");
const {contactValidation}=require("../../middlewares/validation.js")

const router = express.Router();

router.get("/", getContacts);

router.get("/:contactId", getOneContactById);

router.post("/", contactValidation, addNewContact);

router.delete("/:contactId", deleteContactById);

router.put("/:contactId", contactValidation, updateExistingContact);

module.exports = router;
