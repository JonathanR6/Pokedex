import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import searchReducer from "./searchReducer";
import pokeInfoReducer from "./pokeInfoReducer";
import typesReducer from "./typeReducer";

const reducers = combineReducers({
  homeReducer,
  searchReducer,
  pokeInfoReducer,
  typesReducer,
});

export default reducers;
