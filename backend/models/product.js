const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      models.Product.belongsTo(models.Category, { targetKey: 'id', as: 'category'})
    }
  }
  Product.init({
    productName: DataTypes.STRING,
    price: DataTypes.INTEGER,
    productImage: DataTypes.STRING,
    categoryId: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};