import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import SocialButtonsPage from "./components/Footer.js";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <SocialButtonsPage />
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
