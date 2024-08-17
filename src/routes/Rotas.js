const express = require('express');
// const RotasUser = require('../routes/RotasUser');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/token', authController.login, (req, res) => {
    if (res.statusCode == 400) {
        return res.status(400).json({ error: 'Usuário ou senha inválidos' });
    }
    if (res.statusCode == 200) {
        return res.status(200).json({ message: 'Token Creado com sucesso', token: req.token });
    }
});

router.get('/valida', authController.verifyToken, (req, res) => {
    if (res.statusCode === 401) {
        return res.status(401).json({ error: 'Token inválido' });
    }
    res.json({ message: 'Authenticado', userId: req.userId });

});


module.exports = router;