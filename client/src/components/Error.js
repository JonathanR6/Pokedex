import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../styles/error.css";

import { useDispatch } from "react-redux";
import { emptyPokemon } from "../store/actions";

const Error = ({ error, backP }) => {
  const dispatch = useDispatch();

  return ReactDOM.createPortal(
    <div className="fondo" onClick={() => dispatch(emptyPokemon())}>
      <div className="errorcontainer">
        <div className="errorheader">
          {backP && (
            <Link
              className="linkerror"
              to="#"
              onClick={() => dispatch(emptyPokemon())}
            >
              back
            </Link>
          )}
          <p className="errorp">error</p>
        </div>
        <div className="error">
          <h3 className="errorh3">{error}</h3>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Error;
