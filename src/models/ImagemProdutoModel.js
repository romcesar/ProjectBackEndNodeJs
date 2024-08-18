const { DataTypes } = require('sequelize');
    const sequelize = require('../config/database');
    const Product = require('./product');

    const ProductImage = sequelize.define('ProductImage', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Product,
                key: 'id',
            },
        },
        enabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        path: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
    });

    Product.hasMany(ProductImage, { foreignKey: 'product_id' });
    ProductImage.belongsTo(Product, { foreignKey: 'product_id' });

    module.exports = ProductImage;