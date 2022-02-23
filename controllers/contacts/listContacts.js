const {Contact}=require('../../models/contacts')

const listContacts = async (req, res, next) => {
    const result = await Contact.find({});
    res.status(200).json({
    status: "success",
    code: 200,
    data: { result },
  });
}

module.exports = listContacts;
