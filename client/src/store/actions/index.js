import { fetchAllPokemons, addLatest } from "./homeAction";
import { fetchPokeInfo, empryPokeinfo } from "./pokeInfoAction";
import { fetchSearch, emptyPokemon } from "./searchAction";
import { allTypes } from "./typeAction";
import {
  nexPag,
  prevPag,
  nextPage,
  prevPage,
  setPage,
} from "./paginationAction";
import {
  filterAz,
  filterZa,
  filterForceMax,
  filterForceMin,
  filterType,
  filterMyPokemons,
  emptyFilter,
} from "./filterAction";

export {
  fetchAllPokemons,
  addLatest,
  fetchPokeInfo,
  fetchSearch,
  emptyPokemon,
  allTypes,
  empryPokeinfo,
  nexPag,
  prevPag,
  nextPage,
  prevPage,
  setPage,
  filterAz,
  filterZa,
  filterForceMax,
  filterForceMin,
  filterType,
  filterMyPokemons,
  emptyFilter,
};
