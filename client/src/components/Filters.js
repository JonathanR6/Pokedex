import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../store/actions";
import {
  filterAz,
  filterZa,
  filterForceMax,
  filterForceMin,
  filterType,
  filterMyPokemons,
  allTypes,
} from "../store/actions";
import Options from "./Options";
import "../styles/filter.css";

const Filters = ({ values }) => {
  const dispatch = useDispatch();
  const { types } = useSelector((state) => state.typesReducer);
  const { value } = useSelector((state) => state.filterReducer);

  useEffect(() => {
    types.length || dispatch(allTypes());
  }, [dispatch, types.length]);

  const [drop, setDrop] = useState({
    filter: false,
    "A-Z / Z-A": false,
    Force: false,
    Types: false,
  });

  const handleSelect = (e) => {
    const target = e.target.id;
    const type = types.map((r) => r.name).includes(target);

    setDrop(!drop.filter);
    dispatch(setPage());
    if (target === "a-z") return dispatch(filterAz(target, values));
    if (target === "z-a") return dispatch(filterZa(target, values));
    if (target === "max-min") return dispatch(filterForceMax(target, values));
    if (target === "min-max") return dispatch(filterForceMin(target, values));
    if (type) return dispatch(filterType(values, target));
    if (target) return dispatch(filterMyPokemons(target));
  };

  const handleDrop = (e) => {
    const target = e.target.id;
    return setDrop({ ...drop, [target]: !drop[target] });
  };

  return (
    <div className="filtercontainer">
      <div>
        <button className="filter" id="filter" onClick={handleDrop}>
          Filter order by {value}
          <i
            className={`fa-solid fa-angle-down ${drop.filter && "active"}`}
          ></i>
        </button>
      </div>

      {drop.filter && (
        <div className="select">
          <Options
            name={"A-Z / Z-A"}
            selectable={["a-z", "z-a"]}
            drop={handleDrop}
            select={handleSelect}
            dropdown={drop}
          />
          <Options
            name={"Force"}
            selectable={["max-min", "min-max"]}
            drop={handleDrop}
            select={handleSelect}
            dropdown={drop}
          />
          <Options
            name={"Types"}
            selectable={types.map((r) => r.name)}
            drop={handleDrop}
            select={handleSelect}
            dropdown={drop}
          />

          <div className="option">
            <button id="My pokemons" onClick={handleSelect}>
              My pokemons
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
