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
        const user = await User.create({
            firstname, username, password: hashedPassword, email, surname
        });

        console.log(user);

        res.json({
            user, token: AuthController.generateToken(user)
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.GetUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.json(user);

    } catch (error) {

        res.status(404).json({ error: 'User not found' });
    }
}

exports.UpdateUser = async (req, res) => {

    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const updatedUser = await user.update(req.body);
        res.json(updatedUser);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.DeleteUser = async (req, res) => {

    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        await user.destroy();
        res.json({ message: 'User deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}