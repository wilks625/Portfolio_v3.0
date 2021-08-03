import logo from "./logo.svg";
import "./App.css";
// import { Route, HashRouter as Router, Switch, Link } from "react-router-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import SocialButtonsPage from "./components/Footer.js";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <SocialButtonsPage />
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
