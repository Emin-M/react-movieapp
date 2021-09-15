import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Header from "./Header";

const Menu = ({ popular, search }) => {
  const renderPopular = popular.map((movie) => {
    return (
      <Link key={movie.id} to={`/movie/${movie.id}`}>
        <div className="card">
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
    return (
      <Link to={`/movie/${movie.id}`}>
        <div className="card" key={movie.id}>
          <img
            className="card-image"
            src={`http://image.tmdb.org/t/p/w780/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </Link>
    );
  });

  return (
    <div className="menu">
      <Header />
      <h2>{search[0] ? "Search Result" : "Popular Movies"}</h2>
      <div className="card-container">
        {search[0] ? renderSearch : renderPopular}
      </div>
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
