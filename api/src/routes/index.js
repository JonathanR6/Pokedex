const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routePokemon = require("./getPokemon.route");
const addPokemon = require("./addPokemon.route");
const getType = require("./getType.route");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", routePokemon);
router.use("/pokemons", addPokemon);
router.use("/types", getType);

module.exports = router;
