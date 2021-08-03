import React from "react";
import "../App.css";

import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
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
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>

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
