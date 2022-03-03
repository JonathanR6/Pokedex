import React from "react";
import "../styles/loading.css";

const Loading = ({ pokemons, pokemon }) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (pokemons) {
    return (
      <div className="load__container">
        {arr.map((r, i) => {
          return (
            <div key={i} className="div__load">
              <div className="load__img__container">
                <div className="load__img load" />
              </div>
              <div className="load__info">
                <p className="load__name load" />
                <div className="load__container__type">
                  <div className="load__type load" />
                  <div className="load__type load" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  if (pokemon) {
    return (
      <div className="infoload__container">
        <div className="info__header">
          <div>
            <p className="infoload__name load" />
          </div>
          <div className="imgstatsload__container">
            <div className="infoload__img load" />
            <div className="infostats__container">
              {arr.slice(0, 4).map((r, i) => {
                return <div key={i} className="info__stats load" />;
              })}
            </div>
          </div>
        </div>
        <div className="load__type load" />
        <div className="load__type load" />
        <div className="featuresload__container">
          <p className="featuresload__h4 load" />
          <p className="featuresload__h4 load" />
        </div>
      </div>
    );
  }
};

export default Loading;
