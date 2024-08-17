const bcrypt = require('bcrypt');
const User = require('../models/UsuarioModel');
const jwt = require('jsonwebtoken');

const AuthController = require('../controllers/authController');

require('dotenv').config();


exports.CreateUser = async (req, res) => {

    const {

        firstname, username, password, email, surname
    } = req.body;


    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(firstname, username, hashedPassword)
    try {
        console.log("chegou no try")
        const user = await User.create({
            firstname, username, password, email, surname
        });

        console.log(user);

        res.json({
            user, token: AuthController.generateToken(user)
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};