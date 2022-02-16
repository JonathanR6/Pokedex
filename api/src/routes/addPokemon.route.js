const { Router } = require("express");
const { Pokemon, Type } = require("../db.js");

const addPokemon = Router();

addPokemon.post("/", async (req, res) => {
  const {
    name,
    sprites,
    vida,
    fuerza,
    defensa,
    velocidad,
    altura,
    peso,
    types,
  } = req.body;

  try {
    let pokemon = await Pokemon.create({
      name,
      sprites,
      vida,
      fuerza,
      defensa,
      velocidad,
      altura,
      peso,
    });

    let type = await Promise.all(
      types.map((typer) => Type.findOne({ where: { name: typer } }))
    );

    pokemon.addTypes(type);

    res.json({ exito: "Pokemon creado con exito" });
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = addPokemon;
