import React from "react";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";

import "../../App.css";

export default function Contact() {
  return (
    <div id="contact-container">
      <Container>
        <h1>Contact Information</h1>
        <p class="lead">Phone: (703)408-2249</p>
        <p class="lead">
          Email: <a href="mailto:syacas123@gmail.com">syacas123@gmail.com</a>
        </p>

        <Col id="contact-container" xs={12} md={8}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
        <Button>Submit</Button>
      </Container>
    </div>
  );
}
