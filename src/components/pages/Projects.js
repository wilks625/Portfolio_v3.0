import React from 'react';
import Image from 'react-bootstrap/Image'
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import MuscleMate from "../images/MuscleMate1.png"
import SnagABox from "../images/snag-a-box-screenshot.png"
import NoteTaker from "../images/notetaker,png.png"
import PassGen from "../images/password-generator-screenshot.png"
import BudgetTrack from "../images/budgetTracker.png"
import FitnessTrack from "../images/fitnessTracker.png"

export default function Projects() {
  return (
    <div>
      <Row id="work-title" class="work">
    <aside class = "section-title"> 
      <h2 id="home-title" >Work</h2>
    </aside>
    <Col class="work-card-container"> 
        <a href="https://whispering-harbor-84238.herokuapp.com/login">
        <Image src={MuscleMate} className="imgProject" alt="MuscleMate Login page screenshot"></Image>
        </a>
      </Col>

      <Col class="work-card">
        <a href="https://wilks625.github.io/snag-A-box/">
        <Image src={SnagABox} className="imgProject" id="card-1" alt="Horiseon webpage screenshot"></Image>
        </a> 
      </Col>

      <Col class="work-card">
        <a href="https://note-taker-wilks625.herokuapp.com/">
          <Image src={NoteTaker} className="imgProject" alt="link to Note Taker application"></Image>
          </a> 
        </Col>

      <Col class="work-card">
        <a href="https://wilks625.github.io/PasswordGenerator/">
        <Image src={PassGen} className="imgProject" id="card-1" alt="Horiseon webpage screenshot"></Image>
        </a>   
      </Col>

      <Col class="work-card">
        <a href="https://shrouded-reaches-40672.herokuapp.com/">
        <Image src={BudgetTrack} className="imgProject" id="card-1" alt="Horiseon webpage screenshot"></Image>
        </a>   
      </Col>

      <Col class="work-card">
        <a href="https://blooming-tor-44308.herokuapp.com/?id=60dbd856d1b26800154da63d">
        <Image src={FitnessTrack} className="imgProject" id="card-1" alt="Horiseon webpage screenshot"></Image>
        </a>   
      </Col>

      {/* <Col class="work-card">
        <a href="https://wilks625.github.io/Horiseon/">
        <Img src="./assets/images/Horiseon.png" className="imgProject" id="card-1" alt="Horiseon webpage screenshot"></Img>
        </a> 
      </Col>

      <Col class="work-card">
        <a href="https://wilks625.github.io/prework-about-me/">
        <Img src="./assets/images/aboutme.png" className="imgProject"></Img>
        </a>
      </Col> */}

      {/* </div> */}
  </Row>





    </div>
  );
}
