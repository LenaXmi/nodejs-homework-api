const { Contact } = require('../../models/contacts');


const removeContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
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

module.exports = removeContact;