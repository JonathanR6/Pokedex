const { Router } = require("express");
const fetch = require("node-fetch");
const { Type } = require("../db");

const getType = Router();

//normal, fire, water, electric, grass, ice, fighting, poison, ground, flying, psychic, bug, rock, ghost, dragon, darck, steel, fairy
getType.get("/", async (req, res) => {
  // let nose = await fetch("https://pokeapi.co/api/v2/type/")
  //   .then((r) => r.json())
  //   .then((r) => r.results.map((r) => r.name));
  // nose = nose.filter((r) => r !== "unknown" && r !== "shadow");

  // nose.map((r) => {
  //   Type.create({
  //     name: r,
  //   });
  // });

  Type.findAll().then((r) => res.json(r));
});

module.exports = getType;
