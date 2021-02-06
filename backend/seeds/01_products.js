
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {name: 'Product 1', price: '100'},
        {name: 'Product 2', price: '50'},
        {name: 'Product 3', price: '20'},
      ])
    });
};
