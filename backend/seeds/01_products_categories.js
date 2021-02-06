
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {name: 'Category 1'},
        {name: 'Category 2'},
        {name: 'Category 3'},
      ])
    }).then(() => {
      return knex('products').del()
      .then(function () {
        // Inserts seed entries
        return knex('products').insert([
          {name: 'Product 1', price: 100, category_id: 1},
          {name: 'Product 2', price: 50, category_id: 2},
          {name: 'Product 3', price: 20, category_id: 3},
        ])
      });
    })
};
