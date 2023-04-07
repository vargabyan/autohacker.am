const { Schema, model } = require('mongoose');

const adminSocialNetworksSchema = new Schema(
  [
    {
      site: String,
      url: String,
    },
  ],
  {
    versionKey: false,
  }
);

const AdminSocialNetworks = model(
  'admin_social_networks',
  adminSocialNetworksSchema
);

module.exports = AdminSocialNetworks;
