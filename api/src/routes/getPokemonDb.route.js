const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const { dbFormat } = require("./util");

const pokemonDb = Router();

pokemonDb.get("/", async (req, res) => {
  const pokeDb = await Pokemon.findAll({
    include: { model: Type, attributes: ["name"] },
  });

  const data = pokeDb ? pokeDb.map((r) => dbFormat(r)) : "";

  res.json(data);
});

module.exports = pokemonDb;
