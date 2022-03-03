import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/pagination.css";

import { nexPag, nextPage, prevPage } from "../store/actions";
import { fetchAllPokemons } from "../store/actions";

const Pagination = ({ offset, next }) => {
  const dispatch = useDispatch();
  const { page, pag, numPag } = useSelector((s) => s.paginationReducer);
  const { loading } = useSelector((s) => s.homeReducer);

  const handleNext = () => {
    if (numPag < offset) {
      dispatch(nextPage());

      if (next < 12) {
        dispatch(nexPag());
        dispatch(fetchAllPokemons(pag * 40));
      }
    }
  };

  const handlePrev = () => {
    return page === 0 ? null : dispatch(prevPage());
  };

  return (
    <div className="pagdiv">
      <button className="pagbtn" onClick={handlePrev}>
        <i className="fa-solid fa-angle-left"></i>
      </button>

      <p className="pagtext">
        {numPag} / {offset}
      </p>

      <button className="pagbtn" disabled={loading} onClick={handleNext}>
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
