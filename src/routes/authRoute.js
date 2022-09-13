const express = require('express');
const { loginController } = require('../controllers/loginController');
const { registerController } = require('../controllers/registerController');
const { myValidator } = require('../validators/validator');
const registerRoute = express.Router();
const loginRoute = express.Router();


registerRoute.post('/register',myValidator,registerController);

loginRoute.post('/login',myValidator,loginController);

module.exports = {registerRoute,loginRoute }