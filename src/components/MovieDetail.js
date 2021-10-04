import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchMovie, fetchCredits } from "../actions";
import millify from "millify";

import "../css/MovieDetail.css";
import noimage from "../images/no-image.jfif";

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

  const renderMinutes = (minute) => {
    let h = Math.floor(minute / 60);
    let m = minute % 60;
    return `${h}h ${m}m`;
  };

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
        <span>Running Time: {renderMinutes(movie.movie.runtime)}</span>
        <span>
          Budget:{" "}
          {movie.movie.budget
            ? `${millify(`${movie.movie.budget}`)}`
            : "No Information"}
        </span>
        <span>
          Revenue:{" "}
          {movie.movie.revenue
            ? `${millify(`${movie.movie.revenue}`)}`
            : "No Information"}
        </span>
      </div>
    </div>
  );

  const renderCredits = movie.credits.map((credit) => {
    let link;
    credit.profile_path
      ? (link = `http://image.tmdb.org/t/p/w780/${credit.profile_path}`)
      : (link = noimage);
    return (
      <Link key={credit.id} to={`/person/${credit.id}`}>
        <div data-aos="fade-zoom-in" className="card card-actor">
          <img className="card-image" src={link} alt={credit.name} />
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
      {movie.movie.title ? (
        <div>{renderMovie}</div>
      ) : (
        <div className="text-center">
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <h2>Actors</h2>
      {movie.credits[0] ? (
        <div className="credit-container">{renderCredits}</div>
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
    movie: state.movie,
  };
};

export default connect(mapStateToProps, { fetchMovie, fetchCredits })(
  MovieDetail
);
