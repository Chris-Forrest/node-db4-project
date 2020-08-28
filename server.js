const express = require("express");
const recipeRoutes = require("./model-router/recipes-router");

const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRoutes);

module.exports = server;