const { Router } = require("express");
const latestPokemon = require("./index");

const addNewPokemon = Router();

addNewPokemon.get("/", async (req, res) => {
  try {
    const pokemon = await latestPokemon();
    res.json(pokemon);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = addNewPokemon;
