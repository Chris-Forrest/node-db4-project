const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", async (req,res) => {
    try{
        const recipes = await Recipes.getRecipes()
        res.status(200).json(recipes)
    }catch(err){
        res.status(500).json({ message: "Could not get recipes."})
    }
});


module.exports = router;