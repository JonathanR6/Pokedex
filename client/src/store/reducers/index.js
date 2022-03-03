import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import searchReducer from "./searchReducer";
import pokeInfoReducer from "./pokeInfoReducer";
import typesReducer from "./typeReducer";
import paginationReducer from "./paginationReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  homeReducer,
  searchReducer,
  pokeInfoReducer,
  typesReducer,
  paginationReducer,
  filterReducer,
});

export default reducers;
