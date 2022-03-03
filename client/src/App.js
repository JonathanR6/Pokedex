import { Route, Routes } from "react-router-dom";
import LandignPage from "./pages/LandingPage";
import Home from "./pages/Home";
import PokemonInfo from "./pages/PokemonInfo";
import NotFound from "./pages/NotFound";
import CreatePokemon from "./pages/CreatePokemon";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandignPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<PokemonInfo />} />
        <Route path="/home/create" element={<CreatePokemon />} />
        <Route path="/home/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
