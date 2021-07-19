import React from 'react';
import Image from 'react-bootstrap/Image'
import '../../App.css'
import { Container, Row, Col } from 'react-bootstrap'
import profilePic from "../images/headshot-cropped.jpeg"

export default function About() {
  return (

    
    <div>
    

      <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image id='headshot' src={profilePic} roundedCircle />
    </Col>
    <Col>
    <h1>Stephen Yacas</h1>
    <p>My name is Stephen and I currently work in the healthcare field as a Physical Therapist Assistant. And while I love what I do, I have always been curious about the tech industry. </p> 
       <p>I am now a student at the University of Richmond coding bootcamp where I will learn to become a full-stack web developer. I am enjoying the new challenge and am excited to continue to learn and eventually, one day, start my career as a software engineer.</p>
    </Col>
    
  </Row>
</Container>

      
    </div>
  );
}
