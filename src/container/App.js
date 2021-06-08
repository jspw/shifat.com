import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../components/Feed/About";
import Movie from "../components/movie/movie";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>

        {/* <Route exact path="/movie">
          <Movie />
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
