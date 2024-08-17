const express = require('express');

const userController = require('../controllers/userController');


const routerUser = express.Router();


routerUser.post('/createUser', userController.CreateUser);


module.exports = routerUser;