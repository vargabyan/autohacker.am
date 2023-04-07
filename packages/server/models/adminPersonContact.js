const { Schema, model } = require('mongoose');

const adminPersonContactSchema = new Schema(
  {
    filename: String,
    fullname: { am: String, en: String, ru: String },
    jobTitle: { am: String, en: String, ru: String },
    email: String,
    phone: String,
  },
  { versionKey: false }
);

const AdminPersonContact = model(
  'admin_person_contacts',
  adminPersonContactSchema
);

module.exports = AdminPersonContact;
