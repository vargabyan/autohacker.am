const { Schema, model } = require('mongoose');

const adminProductSchema = new Schema({}, { versionKey: false });

const AdminProduct = model('admin_product', adminProductSchema);

module.exports = AdminProduct;
