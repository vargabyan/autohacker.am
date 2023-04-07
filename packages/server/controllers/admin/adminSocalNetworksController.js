const mongoose = require('mongoose');
const AdminSocialNetworks = require('../../models/adminSocialNetworks');

exports.postSocialNetwork = async (request, response) => {
  if (!request.body) return response.sendStatus(404);
  const { site, url } = request.body;

  const result = await AdminSocialNetworks.create({
    site,
    url,
  });

  response.json({ SocialNetworkCreate: result });
};

exports.deleteSocialNetwork = async (request, response) => {
  if (!request.body) return response.sendStatus(404);
  const { id } = request.body;

  const result = await AdminSocialNetworks.findByIdAndDelete(id);

  response.json({ SocialNetworkDelete: result });
};

mongoose.disconnect();
