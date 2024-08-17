const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Definição da tabela User no banco de dados.
const User = sequelize.define('User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        username: {
            type: DataTypes.STRING, allowNull: false, unique: true
        },
        password: {
            type: DataTypes.STRING, allowNull: false
        },
        email: {
            type: DataTypes.STRING, allowNull: false, unique: true
        }
    });

module.exports = User;