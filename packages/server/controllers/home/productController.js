const mongoose = require('mongoose');
const path = require('path');
const AdminProduct = require('../../models/adminProduct');

exports.getProductPhoto = (request, response) => {
  if (!request.query.photo) return response.sendStatus(404);
  const { photo } = request.query;

  response.sendFile(
    path.join(__dirname, '../../', 'uploads', 'productsPhoto', photo)
  );
};

exports.getProducts = async (request, response) => {
  const result = await AdminProduct.find({});

  response.json({ products: result });
};

exports.getProduct = async (request, response, next) => {
  if (!request.query.id) return next();
  const { id } = request.query;

  const result = await AdminProduct.findById(id);

  response.json({ product: result });
  next();
};

mongoose.disconnect();
