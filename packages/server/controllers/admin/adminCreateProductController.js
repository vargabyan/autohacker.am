const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const AdminProduct = require('../../models/adminProduct');

const { UPLOAD_FOLDER_PRODUCTS_PHOTO } = process.env;
const upload = multer({
  dest: UPLOAD_FOLDER_PRODUCTS_PHOTO,
  limits: {
    fileSize: 1000000,
  },
});

exports.postProductPhoto = [
  upload.single('photo'),
  async (request, response) => {
    if (!request.file) return response.sendStatus(404);
    const { filename } = await request.file;

    response.json({ productPhoto: filename });
  },
];

exports.postProduct = async (request, response) => {
  if (!request.body) return request.sendStatus(404);

  const result = await AdminProduct.create(request.body);

  response.json({ priduct: result });
};

exports.putProduct = async (request, response) => {
  if (!request.body) return request.sendStatus(404);
  const { _id } = request.body;

  const result = await AdminProduct.findOneAndUpdate(_id, request.body);

  response.json({ priduct: result });
};

exports.deleteProduct = async (request, response) => {
  if (!request.body) return request.sendStatus(404);
  const { id, photoName } = request.body;

  fs.unlink(
    path.join(__dirname, '../../', UPLOAD_FOLDER_PRODUCTS_PHOTO, photoName)
  );
  await AdminProduct.findByIdAndDelete(id);

  response.json('deleted');
};

mongoose.disconnect();
