import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <Form>
      <Row className="my-3">
        <Col>
          <Form.Control
            className={styles.inputStyled}
            placeholder="First name"
          />
        </Col>
        <Col>
          <Form.Control
            className={styles.inputStyled}
            placeholder="Last name"
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Form.Control
            className={styles.inputStyled}
            placeholder="Email Address"
          />
        </Col>
        <Col>
          <Form.Control
            className={styles.inputStyled}
            placeholder="Phone Number "
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            className={styles.inputStyled}
            as="textarea"
            rows="5"
            placeholder="message..."
          />
        </Col>
      </Row>
      <Button variant="warning" className="my-3 px-5 py-2">
        Submit
      </Button>
    </Form>
  );
}
