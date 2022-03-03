const { Router } = require("express");
const fetch = require("node-fetch");
const { Type } = require("../db");

const getType = Router();

//normal, fire, water, electric, grass, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, darck, steel, fairy
getType.get("/", async (req, res) => {
  const type = await Type.findAll();

  if (!type.length) {
    try {
      let fetchTypes = await fetch("https://pokeapi.co/api/v2/type/")
        .then((r) => r.json())
        .then((r) => r.results.map((r) => r.name));
      fetchTypes = fetchTypes.filter((r) => r !== "unknown" && r !== "shadow");
      fetchTypes.map((r) => {
        Type.create({
          name: r,
        });
      });
      const types = await Type.findAll();
      return res.json(types);
    } catch (err) {
      console.log("ERROR /types", err);
    }
  }

  res.json(type);
});

module.exports = getType;
