import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchMovie, fetchCredits } from "../actions";

import "../css/MovieDetail.css";

const MovieDetail = ({ fetchMovie, fetchCredits, movie, credits }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchMovie(id);
    fetchCredits(id);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, []);

  const renderMovie = (
    <div data-aos="fade-zoom-in">
      <div className="movieName">
        <Link to="/">
          <span>Home |</span>
        </Link>
        <span>{movie.movie.title}</span>
      </div>
      <div className="card about-section">
        <img
          className="backdrop"
          src={`http://image.tmdb.org/t/p/w780/${movie.movie.backdrop_path}`}
          alt={movie.movie.title}
        />
        <div className="images">
          <img
            src={`http://image.tmdb.org/t/p/w780/${movie.movie.poster_path}`}
            alt={movie.movie.title}
          />
          <div className="plot">
            <h3>{movie.movie.title}</h3>
            <h5 className="h5">Plot</h5>
            <p className="p">{movie.movie.overview}</p>
            <div className="rate">
              <div className="rating">
                <h4>Rating</h4>
                <span>{movie.movie.vote_average}</span>
              </div>
              <div className="release">
                <h4>Release Date</h4>
                <span>{movie.movie.release_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="budget">
        <span>Running Time: {movie.movie.runtime}m</span>
        <span>Budget: ${movie.movie.budget}</span>
        <span>Revenue: ${movie.movie.revenue}</span>
      </div>
    </div>
  );

  const renderCredits = movie.credits.map((credit) => {
    return (
      <Link key={credit.id} to={`/person/${credit.id}`}>
        <div data-aos="fade-zoom-in" className="card card-actor">
          <img
            className="card-image"
            src={`http://image.tmdb.org/t/p/w780/${credit.profile_path}`}
            alt={credit.name}
          />
          <div className="card-title">
            <h4 className="card-text">{credit.name}</h4>
            <p className="card-text">{credit.character}</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="movieDetail">
      <div>{renderMovie}</div>
      <h2>Actors</h2>
      <div className="credit-container">{renderCredits}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

export default connect(mapStateToProps, { fetchMovie, fetchCredits })(
  MovieDetail
);
