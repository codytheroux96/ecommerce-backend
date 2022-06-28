//id-integer-no null values-primarykey-auto incrememt
//product_name--string--no null values
//price---decimal---no null values---validates that value is decimal
//stock----integer-no null values- default value of 10--validates that value is numeric
//category_id-integer-references the category model's id



// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
