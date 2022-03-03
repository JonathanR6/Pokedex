import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const LandinPage = () => {
  return (
    <div>
      <div className="landing__container"></div>
      <Link className="landing" to="/home"></Link>
      <Link to="/home" className="landing__logo__container">
        <img className="landing__logo" src={"../img/logo.png"} alt="logo" />
      </Link>
      <Link to="/home" className="landingp">
        Click anywhere to start...
      </Link>
    </div>
  );
};

export default LandinPage;
