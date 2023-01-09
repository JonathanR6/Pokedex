const { Pokemon, Type } = require("../../db");
const { dbFormat } = require("../util");

const latestPokemon = async () => {
  const db = await Pokemon.findAll({
    include: { model: Type, attributes: ["name"] },
  });
  const pokemon = db.pop();

  return dbFormat(pokemon);
};

module.exports = latestPokemon;
