const express = require('express');
const AuthController = require('../controllers/authController');

const userController = require('../controllers/categoriaController');


const routerCategoria = express.Router();

routerCategoria.get('/search', AuthController.verifyToken, userController.getAllCategorias);

routerCategoria.get('/:id', AuthController.verifyToken, userController.getCategoriaById);

routerCategoria.post('/', AuthController.verifyToken, userController.createCategoria);

routerCategoria.put('/:id', AuthController.verifyToken, userController.updateCategoria);

routerCategoria.delete('/:id', AuthController.verifyToken, userController.deleteCategoria);


module.exports = routerCategoria;