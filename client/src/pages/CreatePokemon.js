import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { validate, formComplete } from "../utils/utilsForm";
import Form from "../components/Form";
import "../styles/form.css";
import "../styles/types.css";
import "../styles/filter.css";

import { allTypes, addLatest } from "../store/actions";
const {API_URL} = process.env

const CreatePokemon = () => {
  const { types } = useSelector((state) => state.typesReducer);
  const dispatch = useDispatch();

  const data = {
    name: "",
    sprites: "",
    health: 1,
    attack: 1,
    defense: 1,
    speed: 1,
    height: "",
    weight: "",
    types: [],
  };

  useEffect(() => {
    types.length || dispatch(allTypes());
  }, [dispatch, types.length]);

  const type = types.map((r) => r.name);

  const [drop, setDrop] = useState(false);

  const [create, setCreate] = useState(false);

  const [error, setError] = useState("");

  const [value, setValue] = useState({ ...data });

  const handleDrop = () => {
    return setDrop(!drop);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setError(
      validate({ ...value, [e.target.name]: e.target.value }, e.target.name)
    );
  };

  const handleSelect = (e) => {
    if (!value.types.includes(e.target.id)) {
      setValue({
        ...value,
        types: [...value.types, e.target.id],
      });
      setError(validate({ ...value, types: e.target.id }, "types"));
    }
  };

  const onClose = (e) => {
    setValue({ ...value, types: value.types.filter((r) => r !== e) });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    const formValidate = formComplete(value);
    setError(formValidate);

    if (formValidate.complete) {
      fetch(`${API_URL}/pokemons`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json",
        },
      });
      dispatch(addLatest());
      setCreate(!create);
      setValue({ ...data });
      setTimeout(() => setCreate(false), 5000);
    }
  };

  const date = ["health", "attack", "defense", "speed", "weight", "height"];

  return (
    <>
      <div className="pokeinfolink">
        <Link to="/home">back</Link>
      </div>
      <form className="form" onSubmit={handleSumit}>
        <header className="formheader">
          <div className="container__name">
            <input
              value={value.name}
              placeholder="Pokemon name"
              autoComplete="off"
              className="inputname"
              name="name"
              type="text"
              onChange={handleChange}
            />
            {error.name && <p className="dangerinputs">{error.name}</p>}
          </div>
          <h4>Create Pokemon</h4>
        </header>

        <main className="formcontainer">
          <div className="formimgcontainer">
            {value.sprites ? (
              <img className="formimg" src={value.sprites} alt="poke imagen" />
            ) : (
              <input
                className="formimginput"
                autoComplete="off"
                placeholder="drag image"
                name="sprites"
                onChange={handleChange}
              />
            )}
            {error.sprites && <p className="dangerinputs">{error.sprites}</p>}
          </div>

          <div className="valuescontainer">
            <div className="inputscontainer">
              {date.map((r) => {
                return (
                  <Form
                    key={r}
                    name={r}
                    value={value[r]}
                    type={r === "weight" || r === "height" ? "text" : "range"}
                    min={"1"}
                    danger={error}
                    change={handleChange}
                  />
                );
              })}

              <div className="wh">
                <div className="typesformcontainer">
                  {value.types &&
                    value.types.map((r, i) => (
                      <div key={i} className={`${r} divtype nose`}>
                        <p onClick={() => onClose(r)} className="typep p">
                          {r}
                        </p>
                      </div>
                    ))}
                </div>
                {error.types && <p className="dangerinputs">{error.types}</p>}
              </div>
              <div>
                <div>
                  <header className="filter" id="type" onClick={handleDrop}>
                    Types{" "}
                    <i
                      className={`fa-solid fa-angle-down ${drop && "active"}`}
                    ></i>
                  </header>
                </div>

                {drop && (
                  <main className="select optionone">
                    {type.map((r) => (
                      <p
                        id={r}
                        name="types"
                        key={r + Math.random()}
                        onClick={handleSelect}
                      >
                        {r}
                      </p>
                    ))}
                  </main>
                )}
              </div>
            </div>
          </div>
        </main>

        <div className="btncontainer">
          <button className="btn">Create</button>
        </div>
      </form>
      {create && <p className="create">El pokemon fue creado correctamente</p>}
    </>
  );
};

export default CreatePokemon;
