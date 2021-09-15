import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import MovieDetail from "./components/MovieDetail";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/movie/:id" exact component={MovieDetail} />
      </Switch>
    </div>
  );
};

export default App;
