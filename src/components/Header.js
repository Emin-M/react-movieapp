import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPopular, fetchMovies } from "../actions";
import cover from "../images/coverphoto.jpg";
import "../css/Header.css";

const Header = ({ fetchPopular, fetchMovies, popular, search }) => {
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
          {popular[0] ? (
            <React.Fragment>
              <img
                src={`http://image.tmdb.org/t/p/w780/${popular[0].backdrop_path}`}
                alt="coverphoto"
              />
              <div className="header-text">
                <h1>{popular[0].title}</h1>
                <p>{popular[0].overview}</p>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img src={cover} alt="coverimage" />
              <div className="text-center header-spinner">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
              <div className="header-text">
                <h1>Border</h1>
                <p>
                  The Syrian war has so far caused up to 40,000 deaths and 4.8
                  million refugees who have fled to Libya, Turkey and Jordan.
                  This Film is based on true...
                </p>
              </div>
            </React.Fragment>
          )}
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
            list="searchSuggestion"
          />
          <datalist id="searchSuggestion">
            <option value="Avengers: End Game"></option>
            <option value="La Casa De Papel"></option>
            <option value="No Way Home"></option>
            <option value="Game Of Thrones"></option>
            <option value="5 Feet Apart"></option>
          </datalist>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    search: state.search,
    popular: state.popular,
  };
};

export default connect(mapStateToProps, { fetchPopular, fetchMovies })(Header);
