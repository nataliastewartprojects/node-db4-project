exports.up = function (knex) {
  return knex.schema
    .createTable("recipe", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("steps");
    })
    .createTable("ingredient", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.float("quantity");
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("recipe.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("ingredient")
    .dropTableIfExists("recipe");
};
