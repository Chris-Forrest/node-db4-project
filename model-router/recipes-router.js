const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", async (req,res,next) => {
    try{
        const recipes = await Recipes.getRecipes()
        res.status(200).json(recipes)
    }catch(err){
        //res.status(500).json({ message: "Could not get recipes."})
        next(err)
    }
});

router.get("/:id/shopping-list", async (req, res,next) => {
    try{
    const list = await Recipes.getShoppingList(req.params.id)
    res.status(200).json(list)
    }catch(err){
       // res.status(500).json({ message:"Could not get shopping list"})
       next(err)
    }
});

router.get("/:id/instructions", async (req,res,next) => {
    try{
        const instructions = await Recipes.getInstructions(req.params.id)
        res.status(200).json(instructions)
    }catch(err){
       // res.status(500).json({ message: "Could not get instructions"})
       next(err)
    }
});


module.exports = router;