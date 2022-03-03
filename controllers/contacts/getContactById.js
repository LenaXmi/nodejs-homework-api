const { Contact } = require('../../models/contacts')

const getContactById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
console.log(result)
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

module.exports = getContactById;