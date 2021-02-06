'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Product.belongsTo(models.Category, { targetKey: 'id', as: 'category'})
    }
  };
  Product.init({
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};