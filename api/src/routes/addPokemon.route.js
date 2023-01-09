const { Router } = require("express");
const { Pokemon, Type } = require("../db.js");

const addPokemon = Router();

addPokemon.post("/", async (req, res) => {
  const {
    name,
    sprites,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    types,
  } = req.body;

  try {
    let pokemon = await Pokemon.create({
      name,
      sprites,
      health,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    let type = await Promise.all(
      types.map((typer) => Type.findOne({ where: { name: typer } }))
    );

    const espera = await pokemon.addTypes(type);

    res.json(pokemon);
  } catch (err) {
    res.json({ "create pokemon error": err });
  }
});

module.exports = addPokemon;
