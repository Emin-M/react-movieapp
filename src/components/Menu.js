import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "./Header";
import noimage from "../images/no-image.jfif";

const Menu = ({ popular, search }) => {
  const renderPopular = popular.map((movie) => {
    return (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <div data-aos="fade-zoom-in" className="card cardd">
          <img
            className="card-image"
            src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </Link>
    );
  });

  const renderSearch = search.map((movie) => {
    let link;
    movie.poster_path
      ? (link = `http://image.tmdb.org/t/p/w780/${movie.poster_path}`)
      : (link = noimage);

    return (
      <Link to={`/movie/${movie.id}`}>
        <div data-aos="fade-zoom-in" className="card cardd" key={movie.id}>
          {movie.poster_path ? (
            <img className="card-image" src={link} alt={movie.title} />
          ) : (
            <div className="card" style={{ height: "100%" }}>
              <img className="card-image-top" src={link} />
              <div className="card-title">
                <h4 style={{ margin: "1rem" }} className="card-text">
                  {movie.title}
                </h4>
              </div>
            </div>
          )}
        </div>
      </Link>
    );
  });

  return (
    <div className="menu">
      <Header />
      <h2 className="txt">{search[0] ? "Search Result" : "Popular Movies"}</h2>
      {search[0] || popular[0] ? (
        <div className="card-container">
          {search[0] ? renderSearch : renderPopular}
        </div>
      ) : (
        <div className="text-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    popular: state.popular,
    search: state.search,
  };
};

export default connect(mapStateToProps)(Menu);
