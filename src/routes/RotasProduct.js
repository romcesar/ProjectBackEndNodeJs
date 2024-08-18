const express = require('express');
const AuthController = require('../controllers/authController');

const produtoController = require('../controllers/produtoController');


const routerProduto = express.Router();

routerProduto.post('/', AuthController.verifyToken, produtoController.createProduto);

routerProduto.get('/seach', AuthController.verifyToken, produtoController.getAllProdutos);

routerProduto.get('/:id', AuthController.verifyToken, produtoController.getProdutoById);

routerProduto.put('/:id', AuthController.verifyToken, produtoController.updateProduto);

routerProduto.delete('/:id', AuthController.verifyToken, produtoController.deleteProduto);

module.exports = routerProduto;