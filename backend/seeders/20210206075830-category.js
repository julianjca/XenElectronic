'use strict';
const uuid = require('uuid');

const categories = [{
  id: '18bc6c31-e636-4f71-b1f8-52449dbe9950',
  name: 'Category 1',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  id: '0e4745c8-2834-4fe8-a460-9811d1d6a6ae',
  name: 'Category 2',
  createdAt: new Date(),
  updatedAt: new Date(),
}, {
  id: '080115fd-fb6b-436a-8efe-0a8f405ff2ae',
  name: 'Category 3',
  createdAt: new Date(),
  updatedAt: new Date(),
}]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', categories);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', categories);
  }
};
