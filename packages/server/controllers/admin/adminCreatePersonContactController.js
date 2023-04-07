const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const AdminPersonContact = require('../../models/adminPersonContact');

const { UPLOAD_FOLDER_PERSON_CONTACT_PHOTO } = process.env;
const upload = multer({
  dest: UPLOAD_FOLDER_PERSON_CONTACT_PHOTO,
  limits: {
    fileSize: 1000000,
  },
});

exports.postPersonContactPhoto = [
  upload.single('photo'),
  async (request, response) => {
    if (!request.file) return response.sendStatus(404);
    const { filename } = await request.file;

    response.json({ personPhoto: filename });
  },
];

exports.deletePersonContactPhoto = async (request, response) => {
  if (!request.body) return response.sendStatus(404);
  const { filename } = request.body;

  try {
    fs.unlinkSync(
      path.join(__dirname, '../../', 'uploads', 'personContactPhoto', filename)
    );
    response.sendStatus(204);
  } catch (error) {
    response.sendStatus(204);
  }
};

exports.postPersonContact = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const { photo, fullname, jobTitle, email, phone, filename } = request.body;
  const result = await AdminPersonContact.create({
    photo,
    filename,
    fullname,
    jobTitle,
    email,
    phone,
  });

  response.json({ person: result });
};

exports.putPersonContact = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const { _id, photo, fullname, jobTitle, email, phone, filename } =
    request.body;
  console.log('request.body=>', request.body);
  const result = await AdminPersonContact.findByIdAndUpdate(_id, {
    photo,
    filename,
    fullname,
    jobTitle,
    email,
    phone,
  });

  response.json({ person: result });
};

exports.deletePersonContact = async (request, response) => {
  if (!request.body) return response.sendStatus(404);

  const { id } = request.body;
  await AdminPersonContact.findByIdAndDelete(id);

  response.json({ person: 'delete' });
};

mongoose.disconnect();
