import React from 'react';
import { MDBIcon, MDBContainer } from 'mdbreact';


import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'
import { SocialIcon } from 'react-social-icons';



const SocialButtonsPage = () => {
  return (
      <footer id="footer">
<SocialIcon id="socialIcon" url="https://www.facebook.com/stephen.yacas" />
<SocialIcon id="socialIcon" url="https://www.linkedin.com/in/stephen-yacas-bb5557113/" />
<SocialIcon id="socialIcon" url="https://github.com/wilks625" />


    </footer>
  );
}

export default SocialButtonsPage;