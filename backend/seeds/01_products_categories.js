const uuid = require('uuid')

const categories = [
  {id: uuid.v4(), name: 'Category 1'},
  {id: uuid.v4(), name: 'Category 2'},
  {id: uuid.v4(), name: 'Category 3'},
]

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert(categories)
    }).then(() => {
      return knex('products').del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          {id: uuid.v4(), name: 'Product 1', price: 100, category_id: categories[0].id},
          {id: uuid.v4(), name: 'Product 2', price: 50, category_id: categories[1].id},
          {id: uuid.v4(), name: 'Product 3', price: 20, category_id: categories[2].id},
        ])
      });
    })
};
