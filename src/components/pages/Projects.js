import React from "react";
import Image from "react-bootstrap/Image";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import MuscleMate from "../images/MuscleMate1.png";
import SnagABox from "../images/snag-a-box-screenshot.png";
import NoteTaker from "../images/notetaker,png.png";
import PassGen from "../images/password-generator-screenshot.png";
import BudgetTrack from "../images/budgetTracker.png";
import FitnessTrack from "../images/fitnessTracker.png";

export default function Projects() {
  return (
    <div>
      <Container id="work-title">
        <Row id="home-title" class="work">
          <aside class="section-title">
            <h2 id="home-title">Work</h2>
          </aside>
          <Col class="work-card-container">
            <h3 id="home-title">Musclemate</h3>
            <a href="https://whispering-harbor-84238.herokuapp.com/login">
              <Image
                src={MuscleMate}
                className="imgProject"
                alt="MuscleMate Login page screenshot"
              ></Image>
            </a>
          </Col>

          <Col class="work-card">
            <h3>Snag-a-Box</h3>
            <a href="https://wilks625.github.io/snag-A-box/">
              <Image
                src={SnagABox}
                className="imgProject"
                id="card-1"
                alt="Snag-a-Box webpage screenshot"
              ></Image>
            </a>
          </Col>

          <Col class="work-card">
            <h3>NoteTaker</h3>
            <a href="https://note-taker-wilks625.herokuapp.com/">
              <Image
                src={NoteTaker}
                className="imgProject"
                alt="link to Note Taker application"
              ></Image>
            </a>
          </Col>

          <Col class="work-card">
            <h3>Password Generator</h3>
            <a href="https://wilks625.github.io/PasswordGenerator/">
              <Image
                src={PassGen}
                className="imgProject"
                id="card-1"
                alt="Password Generator App screenshot"
              ></Image>
            </a>
          </Col>

          <Col class="work-card">
            <h3>Budget Tracker</h3>
            <a href="https://shrouded-reaches-40672.herokuapp.com/">
              <Image
                src={BudgetTrack}
                className="imgProject"
                id="card-1"
                alt="Budget Tracker App screenshot"
              ></Image>
            </a>
          </Col>

          <Col class="work-card">
            <h3>Fitness Tracker</h3>
            <a href="https://blooming-tor-44308.herokuapp.com/?id=60dbd856d1b26800154da63d">
              <Image
                src={FitnessTrack}
                className="imgProject"
                id="card-1"
                alt="Fitness Tracker App screenshot"
              ></Image>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
