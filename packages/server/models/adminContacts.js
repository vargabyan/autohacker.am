const { Schema, model } = require('mongoose');

const adminContactsSchema = new Schema(
  [
    {
      address: {
        am: String,
        en: String,
        ru: String,
      },
      email: String,
      phone: String,
    },
  ],
  {
    versionKey: false,
  }
);

const AdminContacts = model('admin_contacts', adminContactsSchema);

module.exports = AdminContacts;
