const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UsuarioModel');

require('dotenv').config();


exports.generateToken = (user) => {
    return jwt.sign({
        id: user.id,
        username: user.username
    },
        process.env.APP_KEY, {
        expiresIn: '1h'
    });
};


exports.login = async (req, res) => {

    const {
        username, password
    } = req.body;
    try {
        const user = await User.findOne({ where: { username } });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ error: 'Credenciais Inválidas' });
        }
        return res.json({
            token: generateToken(user)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Middleware de validação
exports.verifyToken = (req, res, next) => {

    const token = req.headers['authorization'];


    if (!token) {
        return res.status(403).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.APP_KEY, (err, decoded) => {

        if (err) {
            return res.status(401).json({ error: 'Failed to authenticate token' });
        }
        req.userId = decoded.id; next();
    });
};

