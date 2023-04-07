const mongoose = require('mongoose');
const AdminSocialNetworks = require('../../models/adminSocialNetworks');

const getSocialNetworks = async (_request, response) => {
  const result = await AdminSocialNetworks.find({});

  response.json({ socialNetworks: result });
};

module.exports = getSocialNetworks;

mongoose.disconnect();
