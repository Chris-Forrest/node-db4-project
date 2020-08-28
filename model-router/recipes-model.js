const db = require("../data/dbconfig");

function getRecipes() {
    return db("recipes")
};

function getShoppingList(recipe_id){
    return db("recipes_ingredients")
    .where({ recipe_id })
    .join("ingredients", "recipes_ingredients.ingredient_id", "=", "ingredients.id")
    .select("ingredients.ingredient_name", "recipes_ingredients.quantity")
};

function getInstructions(recipe_id){
    return db("instructions")
    .where({ recipe_id })
    .orderBy("instructions.step_number")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}