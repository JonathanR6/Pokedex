import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../store/actions";

const Search = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const onKey = (e) => {
    if (!name) return;
    if (e.charCode === 13) {
      dispatch(fetchSearch(name));
      return setName("");
    }
  };

  const handleClick = () => {
    if (!name) return;
    dispatch(fetchSearch(name));
    setName("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={handleChange}
        onKeyPress={onKey}
        placeholder="Search..."
      />

      <button className="buttonsearch" onClick={handleClick}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default Search;
