const express = require('express');
const AuthController = require('../controllers/authController');

const userController = require('../controllers/userController');


const routerUser = express.Router();


routerUser.post('/user', userController.CreateUser);

routerUser.get('/userList', AuthController.verifyToken, userController.GetAllUsers);

routerUser.get('/:id', AuthController.verifyToken, userController.GetUserById);

routerUser.put('/:id', AuthController.verifyToken, userController.UpdateUser);

routerUser.delete('/:id', AuthController.verifyToken, userController.DeleteUser);


module.exports = routerUser;