const routerPages = require('express').Router();
const {
  homePage
} = require('../controllers/index');

routerPages.get(['/','/home'], homePage);


module.exports = routerPages;
