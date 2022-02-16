import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { allTypes } from "../store/actions";

const CreatePokemon = () => {
  const { types } = useSelector((state) => state.typesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    types.length || dispatch(allTypes());
  }, [dispatch, types.length]);

  const [value, setValue] = useState({
    name: "",
    sprites: "",
    vida: 1,
    fuerza: 1,
    defensa: 1,
    velocidad: 1,
    altura: 1,
    peso: 1,
    types: [],
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    console.log(value.img);
  };

  const handleSelect = (e) => {
    if (e.target.name === "types" && !value.types.includes(e.target.value)) {
      setValue({
        ...value,
        [e.target.name]: [...value.types, e.target.value],
      });
    }
  };

  const handleSumit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/pokemons", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(value);
  };

  // const url =
  //   "https://elvortex.com/wp-content/uploads/2018/03/HddtBOT-e1520478229723.png";

  return (
    <>
      <h1>Create Pokemon</h1>
      <Link to="/home">Volver</Link>
      <form onSubmit={handleSumit}>
        <img src={value.sprites} alt="poke imagen" />
        {/* <img src={value.img ? value.img : url} alt="poke imagen" /> */}
        <label>Imagen</label>
        <input name="sprites" onChange={handleChange} />
        <label>Nombre</label>
        <input name="name" type="text" onChange={handleChange} />

        <label>Vida</label>
        <input
          name="vida"
          value={value.vida}
          type="range"
          min="1"
          onChange={handleChange}
        />
        <input name="vida" value={value.vida} onChange={handleChange} />

        <label>ataque</label>
        <input
          name="fuerza"
          value={value.fuerza}
          type="range"
          min="1"
          onChange={handleChange}
        />
        <input name="fuerza" value={value.fuerza} onChange={handleChange} />

        <label>defensa</label>
        <input
          name="defensa"
          value={value.defensa}
          type="range"
          min="1"
          onChange={handleChange}
        />
        <input name="defensa" value={value.defensa} onChange={handleChange} />

        <label>velocidad</label>
        <input
          name="velocidad"
          value={value.velocidad}
          type="range"
          min="1"
          onChange={handleChange}
        />
        <input
          name="velocidad"
          value={value.velocidad}
          onChange={handleChange}
        />

        <label>altura</label>
        <input
          name="altura"
          value={value.altura}
          type="range"
          min="1"
          onChange={handleChange}
        />
        <input name="altura" value={value.altura} onChange={handleChange} />

        <label>peso</label>
        <input
          name="peso"
          value={value.peso}
          type="range"
          min="1"
          onChange={handleChange}
        />
        <input name="peso" value={value.peso} onChange={handleChange} />

        {value.types && value.types.map((r, i) => <p key={i}>{r}</p>)}
        <select name="types" onChange={handleSelect}>
          {types &&
            types.map(({ name }) => {
              return (
                <option name="types" key={name} value={name}>
                  {name}
                </option>
              );
            })}
        </select>
        <button>Crear</button>
      </form>
    </>
  );
};

export default CreatePokemon;
