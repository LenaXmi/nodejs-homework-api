const express = require('express')
const contacts = require('../../models/contacts.json')
const {nanoid} = require('nanoid')

const router = express.Router()

router.get('/', async (req, res, next) => {
  res.json({
    status: 'success',
    code: 200,
    data:{result:contacts}
    
  })
})

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const result = contacts.find(contact => contact.id === contactId)
  if (!result) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message:`Contact with id=${contactId} not found`
    })
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
    })
})

router.post('/', async (req, res, next) => {
  const newContact = { ...req.body, id: nanoid(5) }
  contacts.push(newContact)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result:newContact
    }
})
  
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.put('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
