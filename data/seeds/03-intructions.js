
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions").del()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        { step_number: 1, description: "prepare ingredients",recipe_id:1 },
        { step_number: 2, description: "heat up skillet",recipe_id:1 },
        { step_number: 3, description: "put one tortilla in the skillet",recipe_id:1 },
        { step_number: 4, description: "put the shredded cheese on the tortilla in the pan",recipe_id:1 },
        { step_number: 5, description: "put the other tortilla on top of the cheese",recipe_id:1 },
        { step_number: 6, description: "flip tortillas every 30 seconds until cheese is melted and tortillas toasted",recipe_id:1 },
        { step_number: 7, description: "cut and eat or serve with salsa and sides of your choosing", recipe_id:1},
        { step_number: 1, description: "prepare ingredients",recipe_id:2 },
        { step_number: 2, description: "chop assorted mushrooms to preffered size",recipe_id:2 },
        { step_number: 3, description: "heat skillet with small amount of extra virgin olive oil",recipe_id:2 },
        { step_number: 4, description: "sautee mushrooms and whisk eggs in seperate container",recipe_id:2 },
        { step_number: 5, description: "add whisked eggs to skillet with sauted murhrooms",recipe_id:2 },
        { step_number: 6, description: "cook eggs to desired doneness and eat",recipe_id:2 },
      ]);
    });
};
