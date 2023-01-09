const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routePokemon = require("./getPokemon.route");
const addPokemon = require("./addPokemon.route");
const getType = require("./getType.route");
const pokemonDb = require("./getPokemonDb.route");
const getPages = require("./getPages.route");
const addNewPokemon = require("./addNewPokemon/addNewPokemon");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", routePokemon);
router.use("/pokemons", addPokemon);
router.use("/types", getType);
router.use("/filter", pokemonDb);
router.use("/pages", getPages);
router.use("/db", addNewPokemon);

module.exports = router;
