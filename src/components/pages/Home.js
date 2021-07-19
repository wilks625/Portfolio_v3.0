import React from "react";
import Image from "react-bootstrap/Image";
import "../../App.css";
import { Container, Row, Col } from "react-bootstrap";
import profilePic from "../images/headshot-cropped.jpeg";

export default function About() {
  return (
    <div>
      <Container  id="home-container">
        <Row>
          <Col >
            <Image id="headshot" src={profilePic} roundedCircle />
          </Col>
          <Col>
            <h1 id="home-title">Stephen Yacas</h1>
            <p>
              My name is Stephen and I currently work in the healthcare field as
              a Physical Therapist Assistant. And while I love what I do, I have
              always been curious about the tech industry.{" "}
            </p>
            <p>
              I am now a student at the University of Richmond coding bootcamp
              where I will learn to become a full-stack web developer. I am
              enjoying the new challenge and am excited to continue to learn and
              eventually, one day, start my career as a software engineer.
            </p>

            <h3 id="home-title">Technologies </h3>
            <Row>
              <Col>
                <h3 id="home-title">Frontend </h3>
                <ul >
                  <li>JavaScript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Responsive Design</li>
                  <li>React</li>
                  <li>Bootstrap, Materialize, UIKit</li>
                  <li>jQuery</li>
                </ul>
                <br></br>
              </Col>
              <Col>
                <h3 id="home-title">Backend </h3>
                <ul >
                  <li>SQL</li>
                  <li>APIs</li>
                  <li>REST</li>
                  <li>MongoDB, Mongoose</li>
                  <li>MySQL, Sequelize</li>
                  <li>Express</li>
                  <li>Node</li>
                  <li>GraphQL</li>
                  <li>Django</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
