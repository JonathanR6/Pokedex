import React from "react";
import { Link } from "react-router-dom";

const LandinPage = () => {
  return (
    <>
      <h1>Landin Page</h1>
      {/* <button onClick={<Link to="/home">Home</Link>}>Home</button> */}
      <Link to="/home">Home</Link>
    </>
  );
};

export default LandinPage;
