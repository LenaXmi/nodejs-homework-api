const { Contact } = require('../../models')

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {new:true});
  if (result) {
    res.status(200).json({
      message: "contact successfully updated",
      code: 200,
      data: { result },
    });
  }
}

module.exports = updateContact;
