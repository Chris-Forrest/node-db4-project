const db = require("../data/dbconfig");

function getRecipes() {
    return db("recipes")
};

module.exports = {
    getRecipes,
}