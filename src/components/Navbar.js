import React from "react";
import "../App.css";

// import logo from "../logo2.png"
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        {/* <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..." /></a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <Nav.Item className="nav-item active ">
              <Nav.Link className="nav-link" id="navButton" href="/">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item ">
              <Nav.Link className="nav-link" id="navButton" href="/about">About Me</Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item ">
              <Nav.Link className="nav-link" id="navButton" href="/projects">Projects</Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-item ">
              <Nav.Link className="nav-link" id="navButton" href="/contact">Contact Info</Nav.Link>
            </Nav.Item> */}

            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

            {/* <li className="nav-item">
              <a className="nav-link" href="/about">About Me</a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link" href="/projects">
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact Info
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                style={{ display: "table-cell" }}
                href="https://docs.google.com/document/d/1KMeS7QJI3yYgY8yl-7ELAQMNj5XT5EaXHCyboXHDCEE/edit?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>

            {/* <Nav.Item className="nav-item "> */}

            {/* <Link>
            <a id="navButton" value="Open Window"
            onclick="window.open('https://docs.google.com/document/d/1KMeS7QJI3yYgY8yl-7ELAQMNj5XT5EaXHCyboXHDCEE/edit?usp=sharing')">Resume</a>
            </Link> */}

            {/* </Nav.Item> */}
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
