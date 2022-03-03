const listContacts = require('./listContacts');
const addContact = require('./addContact');
const getContactById = require('./getContactById');
const removeContact = require('./removeContact');
const updateContact = require('./updateContact');
const updateStatusContact = require('./updateStatus');


module.exports = {
    listContacts,
    addContact,
    getContactById,
    removeContact,
    updateContact,
    updateStatusContact
};
