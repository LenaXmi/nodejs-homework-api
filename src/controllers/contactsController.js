const { listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,}=require("../models/contacts.js")

const getContacts = async (req, res, next) => {
  const result = await listContacts();
  res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
  });
}

const getOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId);

  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Contact with id=${contactId} not found`,
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
}

const addNewContact = async (req, res, next) => {
 

 
  const result = await addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
}

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (!result) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "not found",
    });
  }
  res.status(200).json({
    status: "success",
    code: 200,
    message: "contact deleted",
    data: { result },
  });
}

const updateExistingContact = async (req, res, next) => {
  const { contactId } = req.params;
  
  const result = await updateContact(contactId, req.body);
  if (result) {
    res.status(200).json({
      message: "contact successfully updated",
      code: 200,
      data: { result },
    });
  }
}

module.exports = {
    getContacts,
    getOneContactById,
    addNewContact,
    deleteContactById,
    updateExistingContact
}