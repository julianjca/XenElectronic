
exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('categories', (table) => {
      table.uuid('id').primary().unique().notNullable();      table.string('name');
    }),
    
    knex.schema.createTable('products', table => {
      table.uuid('id').primary().unique().notNullable();      table.string('name')
      table.decimal('price',15,2)
      table.uuid('category_id').unsigned()
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
