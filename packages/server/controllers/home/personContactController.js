const mongoose = require('mongoose');
const path = require('path');
const AdminPersonContact = require('../../models/adminPersonContact');

exports.getPersonPhoto = (request, response) => {
  const { person } = request.query;

  response.sendFile(
    path.join(__dirname, '../../', 'uploads', 'personContactPhoto', person)
  );
};

exports.getPersonContacts = async (_request, response) => {
  const result = await AdminPersonContact.find({});

  response.send({ persons: result });
};

exports.getPersonContact = async (request, response) => {
  const { person } = request.query;
  const result = await AdminPersonContact.findById({ _id: person });

  response.json({ person: result });
};

mongoose.disconnect();
