import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ search }) => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleClick = () => {
    if (!name) {
      return;
    }
    search(name);
  };

  return (
    <>
      <input onChange={handleChange} />
      {/* <Link to={`/home/${name}`}>Buscar</Link> */}
      <button onClick={handleClick}>Buscar</button>
    </>
  );
};

export default Search;
