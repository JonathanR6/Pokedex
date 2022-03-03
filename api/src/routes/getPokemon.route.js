const { Router } = require("express");
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

  if (name) {
    let peticion = await peticiones(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    let data = datos(peticion);
    return res.json(data);
  }

  if (!name) {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=40&offset=${pag}`;
    const dbPokemons = await Pokemon.findAll({
      include: { model: Type, attributes: ["name"] },
    });
    const pokeData = pag === "0" ? dbPokemons.map((r) => dbFormat(r)) : "";

    const results = await muchos(url);
    const data = datos(results);

    return res.json([...data, ...pokeData]);
  }
  res.status(404).send("error");
});

routePokemon.get("/:idPokemon", async (req, res) => {
  const { idPokemon } = req.params;

  if (idPokemon.includes("-")) {
    const db = await Pokemon.findByPk(idPokemon, {
      include: { model: Type, attributes: ["name"] },
    });

    if (db) {
      const dbF = dbFormat(db);
      return res.json(dbF);
    }
  }

  const pokemon = await peticiones(
    `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
  );

  if (!pokemon) return res.status(404).send("error");

  const data = datos(pokemon);
  res.json(data);
});

module.exports = routePokemon;
