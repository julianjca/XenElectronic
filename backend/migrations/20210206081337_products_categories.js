
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('categories', (table) => {
      table.increments('id').primary();
      table.string('name');
    }),
    
    knex.schema.createTable('products', table => {
      table.increments('id').primary
      table.string('name')
      table.decimal('price',15,2)
      table.integer('category_id').unsigned()
          .references('id').on('categories');
    })
  ]) 
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTableIfExists('products'),
    knex.schema.dropTableIfExists('categories')
  ]);
};
