
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Product 1', price: '100'},
        {id: 2, name: 'Product 2', price: '50'},
        {id: 3, name: 'Product 3', price: '20'},
      ]);
    });
};
