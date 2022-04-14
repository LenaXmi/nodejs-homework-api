const { Contact } = require('../../models')

const updateStatusContact = async (req, res, next) => {
    const { contactId } = req.params;
    const { favorite } = req.body;
  
  const result = await Contact.findByIdAndUpdate(contactId, {favorite}, {new:true});
  if (!result) {
 res.status(404).json({
        status:'error',
        code: 404,
        message: 'Not found'
        
    })
  }
        res.status(200).json({
      message: "contact successfully updated",
      code: 200,
      data: { result },
    });
   
}

module.exports = updateStatusContact;
