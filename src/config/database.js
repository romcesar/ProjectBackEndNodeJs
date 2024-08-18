const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DATABASE, process.env.USERDB, process.env.SENHADB,
    {
        host: 'localhost', dialect: 'mysql'
    });


module.exports = sequelize;