const { Router } = require("express");
const fetch = require("node-fetch");
const { Pokemon, Type } = require("../db");
const { peticiones, datos, muchos, dbFormat } = require("./util");

const routePokemon = Router();

routePokemon.get("/", async (req, res) => {
  const { name, pag = 0 } = req.query;

  const db = name
    ? await Pokemon.findOne({
        where: { name: name },
        include: {
          model: Type,
          attributes: ["name"],
        },
      })
    : undefined;

  const dbF = db ? dbFormat(db) : undefined;

  if (dbF) {
    return res.json(dbF);
  }
  let peticion = await peticiones(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (name && peticion) {
    let data = datos(peticion);
    return res.json(data);
  }

  if (!name) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${pag}`;
    const dbPokemons = await Pokemon.findAll({
      include: { model: Type, attributes: ["name"] },
    });
    const pokeData = dbPokemons.map((r) => dbFormat(r));

    const results = await muchos(url);
    const data = datos(results);

    return res.json([...data, ...pokeData]);
  }
  res.status(404).send("error");
});

routePokemon.get("/:idPokemon", (req, res) => {
  const { idPokemon } = req.params;
  fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    .then((r) => r.json())
    .then((r) => res.json(r));
});

module.exports = routePokemon;
