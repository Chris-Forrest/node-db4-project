
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients").del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name:"tortillas"},
        { ingredient_name:"shredded cheese"},
        { ingredient_name:"assorted mushrooms"},
        { ingredient_name:"eggs"},
        { ingredient_name:"extra virgin olive oil"}
      ]);
    });
};
