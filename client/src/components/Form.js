import React from "react";
import { heightFormFormat, weightFormat } from "../utils/weightAndHeight";
import "../styles/form.css";

const Form = ({ name, value, type, min, change, danger = "" }) => {
  return (
    <div className={"wh"}>
      <header>
        <label>{name}</label>
      </header>
      <main
        className={
          name === "weight" || name === "height" ? "diferente" : "inputs"
        }
      >
        <input
          name={name}
          value={value}
          type={type}
          min={min}
          max={name === "weight" ? 1000 : 100}
          autoComplete="off"
          onChange={change}
        />

        {name === "height" ? (
          <h4 className="forminput">{heightFormFormat(value)}</h4>
        ) : name === "weight" ? (
          <h4 className="forminput">{weightFormat(value)}</h4>
        ) : (
          <input
            className="forminput"
            name={name}
            value={value}
            autoComplete="off"
            onChange={change}
          />
        )}
      </main>
      {danger[name] && <p className="dangerinputs">{danger[name]}</p>}
    </div>
  );
};

export default Form;
