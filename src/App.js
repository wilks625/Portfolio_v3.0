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
    <Router basename={process.env.PUBLIC_URL} >
      <Navbar />
      <Switch >
        <Route exact path="/projects" render={props => <Projects {...props} />} />
        <Route exact path="/contact" render={props => <Contact {...props} />} />        
        <Route exact path="/" render={props => <Home {...props} />} /> 
        {/* <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/" component={Home} /> */}
      </Switch>
      <SocialButtonsPage />
    </Router>
  );
}

export default App;
