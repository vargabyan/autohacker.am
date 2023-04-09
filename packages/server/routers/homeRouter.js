const { Router } = require('express');

const homeRouter = Router();
const {
  postCalculation,
  getCalculation,
} = require('../controllers/home/calculateController');
const {
  getContacts,
  getContact,
} = require('../controllers/home/contactsController');
const {
  postSendToMail,
  postFileSandToMail,
} = require('../controllers/home/sendToMailController');
const getSocialNetworks = require('../controllers/home/socialNetworksController');
const {
  getPersonContact,
  getPersonContacts,
  getPersonPhoto,
} = require('../controllers/home/personContactController');
const {
  getProducts,
  getProduct,
  getProductPhoto,
} = require('../controllers/home/productController');

homeRouter.post('/calculate', postCalculation);
homeRouter.get('/calculate', getCalculation);
homeRouter.post('/send-mail', postSendToMail);
homeRouter.post('/img', postFileSandToMail);
homeRouter.get('/contact', getContact);
homeRouter.get('/contacts', getContacts);
homeRouter.get('/social-networks', getSocialNetworks);
homeRouter.get('/our-teame', getPersonContacts);
homeRouter.get('/our-teame-img', getPersonPhoto);
homeRouter.get('/person-contact', getPersonContact);
homeRouter.get('/products', getProducts);
homeRouter.get('/product', [getProduct, getProductPhoto]);

module.exports = homeRouter;
