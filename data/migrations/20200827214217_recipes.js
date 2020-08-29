
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", (tbl) => {
      tbl.increments()
      tbl.text("recipe_name", 255).notNullable()
  })

  .createTable("ingredients", (tbl) => {
      tbl.increments()
      tbl.text("ingredient_name", 255).notNullable()
  })

  .createTable("instructions", (tbl) => {
      tbl.increments()
      tbl.integer("step_number")
        .unsigned()
        .notNullable()
      tbl.string("description").notNullable()
      tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
  })

  .createTable("recipes_ingredients", (tbl) => {
      tbl.float("quantity")
        .unsigned()
        .notNullable()
    tbl.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    tbl.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")

        tbl.primary(["recipe_id", "ingredient_id"])
  })


};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("recipes_ingredients")
  .dropTableIfExists("instructions")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};
