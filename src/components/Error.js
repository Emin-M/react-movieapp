import React from "react";
import { Link } from "react-router-dom";

import "../css/Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <div className="error">
        <h1>OOPS!</h1>
        <h2>We can't seem to find the page you're looking for.</h2>
        <h5>Error code: 404</h5>
        <Link to="/" className="btn btn-lg btn-info">
          Back To Home Page
        </Link>
      </div>
    </div>
  );
};

export default Error;
