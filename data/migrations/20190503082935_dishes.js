exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('name', 128)
        .notNullable()
        .unique();
      tbl
        .integer('dishes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('ingredients', tbl => {
      tbl.increment();

      tbl
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('cohorts')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('dishes')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients');
};
