const { Router } = require('express');
const {
  postAdminAuth,
  getAdminAuth,
  postToken,
} = require('../controllers/admin/adminAuthController');
const {
  postCalculatorAuctionSettings,
  getCalculatorAuctionSettings,
} = require('../controllers/admin/adminCalculatorAuctionSettingsControllers');
const {
  postAdminCalculatorFullElectricCarsSettings,
  getAdminCalculatorFullElectricCarsSettings,
} = require('../controllers/admin/adminCalculatorFullElectricCarsControllers');
const {
  postAdminCalculatorOtherCarsSettings,
  getAdminCalculatorOtherCarsSettings,
} = require('../controllers/admin/adminCalculatorOtherCarsControllers');
const {
  postCalculatorSettingSResult,
  getCalculatorSettingSResult,
} = require('../controllers/admin/adminCalculatorResultsSettingsControllers');
const {
  postAdminCalculatorSelectLocationSettings,
  getAdminCalculatorSelectLocationSettings,
  deleteAdminCalculatorSelectLocationSettings,
} = require('../controllers/admin/adminCalculatorSelectLocationSettingsControllers');
const {
  postContact,
  putContact,
  deleteContact,
} = require('../controllers/admin/adminContactsController');
const {
  postSocialNetwork,
  deleteSocialNetwork,
} = require('../controllers/admin/adminSocalNetworksController');
const {
  postPersonContact,
  deletePersonContact,
  postPersonContactPhoto,
  putPersonContact,
  deletePersonContactPhoto,
} = require('../controllers/admin/adminCreatePersonContactController');
const {
  deleteProduct,
  putProduct,
  postProduct,
} = require('../controllers/admin/adminCreateProductController');

const AdminRouter = Router();

AdminRouter.post('/calculator-settings-result', postCalculatorSettingSResult);
AdminRouter.get('/calculator-settings-result', getCalculatorSettingSResult);
AdminRouter.post('/calculator-auction-settings', postCalculatorAuctionSettings);
AdminRouter.get('/calculator-auction-settings', getCalculatorAuctionSettings);
AdminRouter.post(
  '/calculator-select-Location-settings',
  postAdminCalculatorSelectLocationSettings
);
AdminRouter.get(
  '/calculator-select-Location-settings',
  getAdminCalculatorSelectLocationSettings
);
AdminRouter.delete(
  '/calculator-select-Location-settings',
  deleteAdminCalculatorSelectLocationSettings
);
AdminRouter.post(
  '/calculator-full-electric-cars-settings',
  postAdminCalculatorFullElectricCarsSettings
);
AdminRouter.get(
  '/calculator-full-electric-cars-settings',
  getAdminCalculatorFullElectricCarsSettings
);
AdminRouter.post(
  '/calculator-other-cars-settings',
  postAdminCalculatorOtherCarsSettings
);
AdminRouter.get(
  '/calculator-other-cars-settings',
  getAdminCalculatorOtherCarsSettings
);
AdminRouter.post('/auth', postAdminAuth);
AdminRouter.get('/auth', getAdminAuth);
AdminRouter.post('/token', postToken);
AdminRouter.post('/contact', postContact);
AdminRouter.put('/contact', putContact);
AdminRouter.delete('/contact', deleteContact);
AdminRouter.post('/social-network', postSocialNetwork);
AdminRouter.delete('/social-network', deleteSocialNetwork);
AdminRouter.post('/person-contact-img', postPersonContactPhoto);
AdminRouter.delete('/person-contact-img', deletePersonContactPhoto);
AdminRouter.post('/person-contact', postPersonContact);
AdminRouter.put('/person-contact', putPersonContact);
AdminRouter.delete('/person-contact', deletePersonContact);
AdminRouter.delete('/product', deleteProduct);
AdminRouter.put('/product', putProduct);
AdminRouter.post('/product', postProduct);

module.exports = AdminRouter;
