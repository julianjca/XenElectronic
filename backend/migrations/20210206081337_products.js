
exports.up = function(knex) {
  return knex.schema.createTable('products', table => {
    table.increments()
    table.string('name')
    table.decimal('price',15,2)
}) 
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('products')
};
