import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import MovieDetail from "./components/MovieDetail";
import PersonDetail from "./components/PersonDetail";

import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  Aos.init({
    offset: 10,
    duration: 1500,
  });

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/movie/:id" exact component={MovieDetail} />
        <Route path="/person/:id" exact component={PersonDetail} />
      </Switch>
    </div>
  );
};

export default App;
