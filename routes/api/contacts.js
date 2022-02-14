const {listContacts, getContactById, addContact,removeContact, updateContact}=require('../../models/contacts.js')
const express = require('express')



const router = express.Router()

router.get('/', async (req, res, next) => {
  const result = await listContacts();
  res.status(200).json({
    status: 'success',
    code: 200,
    data:{result}
    
  })
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const result = await getContactById(contactId)
 
  if (result) {
     res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    }
    })
  }
  res.status(404).json({
    status: 'error',
    code: 404,
    message:`Contact with id=${contactId} not found`
  })
 
})

router.post('/', async (req, res, next) => {

  const result = await addContact(req.body)

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
})
  
})

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const result = await removeContact(contactId);
  if (result) {
    res.status(200).json({
    status:'success',
    code: 200,
    message: 'contact deleted',
    data:{result}
  })
  }
  res.status(404).json({
    status:'error',
    code:404,
    message: 'not found'
  })
  
})

router.put('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const result = await updateContact(contactId, req.body)
  
    res.status(200).json({
      message: 'contact successfully updated',
      code: 200,
      data:{result}
    })
  
  
})

module.exports = router
