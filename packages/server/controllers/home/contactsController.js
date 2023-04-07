const mongoose = require('mongoose');
const adminContacts = require('../../models/adminContacts');

exports.getContacts = async (_request, response) => {
  const result = await adminContacts.find({});

  response.json({ contacts: result });
};

exports.getContact = async (request, response) => {
  const { id } = request.query;
  const result = await adminContacts.findById(id);

  response.json({ contact: result });
};

mongoose.disconnect();
