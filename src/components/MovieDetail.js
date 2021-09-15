import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchMovie } from "../actions";

import "../css/MovieDetail.css";

const MovieDetail = ({ fetchMovie, movie }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchMovie(id);
  }, []);

  const renderMovie = (
    <div>
      <div className="movieName">
        <Link to="/">
          <span>Back |</span>
        </Link>
        <span>{movie.movie.title}</span>
      </div>
      <div className="about">
        <img
          className="backdrop"
          src={`http://image.tmdb.org/t/p/w780/${movie.movie.backdrop_path}`}
          alt={movie.movie.title}
        />
        <div className="about-section">
          <div className="images">
            <img
              src={`http://image.tmdb.org/t/p/w780/${movie.movie.poster_path}`}
              alt={movie.movie.title}
            />
            <div className="plot">
              <h3>{movie.movie.title}</h3>
              <h5>Plot</h5>
              <p>{movie.movie.overview}</p>
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
          <div className="budget">
            <span>Running Time: {movie.movie.runtime}m</span>
            <span>Budget: ${movie.movie.budget}</span>
            <span>Revenue: ${movie.movie.revenue}</span>
          </div>
        </div>
      </div>
    </div>
  );

  console.log(movie.movie);

  return (
    <div className="movieDetail">
      <div>{renderMovie}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

export default connect(mapStateToProps, { fetchMovie })(MovieDetail);
