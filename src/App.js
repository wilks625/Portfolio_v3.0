import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import SocialButtonsPage from "./components/Footer.js";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/Portfolio_v3.0/"} >
      <Navbar />
      <Switch basename={process.env.PUBLIC_URL + "/Portfolio_v3.0/"}>
        <Route path="/projects/" component={Projects} />
        <Route path="/contact/" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
      <SocialButtonsPage />
    </Router>
  );
}

export default App;
