'use strict';

const products = [
  {
    id: '270cd61d-1965-4ed2-bbf3-a91425a030b8',
    productName: 'Product 1',
    productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
    price: 100,
    categoryId: '18bc6c31-e636-4f71-b1f8-52449dbe9950',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    id: '4ab280d4-71b3-4b2c-9d82-b3495c9cb2c6',
    productName: 'Product 2',
    productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
    price: 50,
    categoryId: '0e4745c8-2834-4fe8-a460-9811d1d6a6ae',
    createdAt: new Date(),
    updatedAt: new Date(),
  }, 
  {
    id: '0313eca4-e36c-4dee-af1f-d5a44ac38411',
    productName: 'Product 3',
    productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
    price: 20,
    categoryId: '080115fd-fb6b-436a-8efe-0a8f405ff2ae',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'dcbcdd60-c3ea-404d-9c28-1b61cb369bcd',
    productName: 'Product 4',
    productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
    price: 20,
    categoryId: '080115fd-fb6b-436a-8efe-0a8f405ff2ae',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'bdd3fc8b-3de8-4bd9-bde6-26e5fb375d04',
    productName: 'Product 5',
    productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
    price: 20,
    categoryId: '06e3875c-b183-4f7e-8956-41cb7043bf08',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'a8151b58-f002-48d6-b329-1e8a1a01e0c1',
    productName: 'Product 6',
    productImage: 'https://cdn-2.tstatic.net/palembang/foto/bank/images/xiaomi-mi-max-3_20180726_121005.jpg',
    price: 20,
    categoryId: '948f5897-e91a-41b1-a21a-389fce7ad518',
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', products);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', products);
  }
};
