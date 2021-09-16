import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchPerson } from "../actions";
import "../css/PersonDetail.css";

const PersonDetail = ({ fetchPerson, movie }) => {
  const { id } = useParams();
  useEffect(() => {
    fetchPerson(id);
  }, []);

  const renderPerson = (
    <div id="person">
      <div className="personName">
        <Link to="/">
          <span>Home |</span>
        </Link>
        <span>{movie.person.name}</span>
      </div>
      <div data-aos="fade-zoom-in" className="about-person card">
        <img
          data-aos="fade-zoom-in"
          className="card-image"
          src={`http://image.tmdb.org/t/p/w780/${movie.person.profile_path}`}
          alt={movie.person.name}
        />
        <div className="about-info">
          <h1>{movie.person.name}</h1>
          <h4>Bio</h4>
          <p>{movie.person.biography}</p>
        </div>
      </div>
    </div>
  );

  console.log(movie.person);
  return <div className="personDetail">{renderPerson}</div>;
};

const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  };
};

export default connect(mapStateToProps, { fetchPerson })(PersonDetail);
