import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../components/Feed/About";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";

const App = () => {
  return (
    // <Router>
    //   <NavBar />

    //   <Switch>
    //     <Route path="/">
    //       <About />
    //     </Route>
    //   </Switch>
    // </Router>
    <>
      <NavBar />
      <About />
    </>
  );
};

export default App;
