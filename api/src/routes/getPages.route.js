const { Router } = require("express");
const fetch = require("node-fetch");
const { Pokemon } = require("../db");

const getPages = Router();

getPages.get("/", async (req, res) => {
  try {
    const pages = await fetch("https://pokeapi.co/api/v2/pokemon").then((r) =>
      r.json()
    );
    const dbpage = await Pokemon.findAll();
    res.json(pages.count + dbpage.length);
  } catch (err) {
    console.log("ERROR /page", err);
  }
});

module.exports = getPages;
