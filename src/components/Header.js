import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPopular, fetchMovies } from "../actions";
import "../css/Header.css";

const Header = ({ fetchPopular, fetchMovies }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    if (term === "") {
      fetchPopular();
    }
  }, [term]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    if (debouncedTerm) {
      fetchMovies(debouncedTerm);
    }
  }, [debouncedTerm]);

  return (
    <div className="header-content">
      <div className="header">
        <div className="header-text">
          <h1>Border</h1>
          <p>
            The Syrian war has so far caused up to 40,000 deaths and 4.8 million
            refugees who have fled to Libya, Turkey and Jordan. This Film is
            based on true...
          </p>
        </div>
      </div>
      <div className="search">
        <div className="search-content">
          <i className="fas fa-search"></i>
          <form>
            <input
              onChange={(e) => setTerm(e.target.value)}
              value={term}
              type="text"
              placeholder="Search For Movies"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { fetchPopular, fetchMovies })(Header);
