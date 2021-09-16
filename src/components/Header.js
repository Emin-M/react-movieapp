import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPopular, fetchMovies } from "../actions";
import "../css/Header.css";

const Header = ({ fetchPopular, fetchMovies, search }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (term === "") {
        fetchPopular();
      }
    }, 5000);
    return () => {
      clearTimeout(timerId);
    };
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [debouncedTerm]);

  return (
    <div data-aos="fade-zoom-in" className="header-content">
      {search[0] ? (
        <div className="empty"></div>
      ) : (
        <div className="header">
          <div className="header-text">
            <h1>Border</h1>
            <p>
              The Syrian war has so far caused up to 40,000 deaths and 4.8
              million refugees who have fled to Libya, Turkey and Jordan. This
              Film is based on true...
            </p>
          </div>
        </div>
      )}
      <div className="search">
        <div className="search-content">
          <i className="fas fa-search"></i>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            type="text"
            placeholder="Search For Movies"
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
  };
};

export default connect(mapStateToProps, { fetchPopular, fetchMovies })(Header);
