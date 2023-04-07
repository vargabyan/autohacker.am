const mongoose = require('mongoose');
const adminContacts = require('../../models/adminContacts');

exports.postContact = async (request, response) => {
  if (!request.body) return response.sendStatus(404);
  const { address, email, phone } = request.body;

  const result = await adminContacts.create({
    address,
    email,
    phone,
  });

  response.json({ contactCreate: result });
};

exports.putContact = async (request, response) => {
  if (!request.body) return response.sendStatus(404);
  const { _id, address, email, phone } = request.body;

  const result = await adminContacts.findByIdAndUpdate(_id, {
    address,
    email,
    phone,
  });

  response.json({ contactUpdate: result });
};

exports.deleteContact = async (request, response) => {
  if (!request.body) return response.sendStatus(404);
  const { id } = request.body;

  const result = await adminContacts.findByIdAndDelete(id);

  response.json({ contactDelete: result });
};

mongoose.disconnect();
