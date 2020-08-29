
exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe_name: "quesadilla"},
    { recipe_name: "mushroom Omelet"}
  ]);
};
