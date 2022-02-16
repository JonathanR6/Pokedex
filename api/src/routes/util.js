const fetch = require("node-fetch");

const peticiones = async (url) => {
  return fetch(url)
    .then((r) => (r.status !== 404 ? r.json() : undefined))
    .then((r) => r);
};

const datos = (arg) => {
  if (!Array.isArray(arg)) {
    return dataFormat(arg);
  }
  return arg.map((r) => dataFormat(r));
};

const dataFormat = (arg) => {
  return {
    name: arg.name,
    sprites: {
      front_default: arg.sprites.front_default,
      other: arg.sprites.other.home.front_default,
    },
    stats: [
      ...arg.stats.filter(
        (r) =>
          r.stat.name !== "special-attack" && r.stat.name !== "special-defense"
      ),
    ],
    types: arg.types,
    weight: arg.weight,
    height: arg.height,
  };
};

const muchos = async (arg) => {
  const requst = await peticiones(arg);
  const promises = requst.results.map((r) => peticiones(r.url));
  return await Promise.all(promises);
};

const dbFormat = (arg) => {
  return {
    name: arg.name,
    sprites: { front_default: arg.sprites },
    stats: [
      { base_stat: arg.vida },
      { base_stat: arg.fuerza },
      { base_stat: arg.defensa },
      { base_stat: arg.velocidad },
    ],
    types: [
      ...arg.types.map((r) => {
        return { type: { name: r.name } };
      }),
    ],
    weight: arg.altura,
    height: arg.peso,
  };
};

module.exports = { peticiones, datos, muchos, dbFormat };
