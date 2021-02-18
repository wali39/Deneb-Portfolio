import React from "react";
import Contact from "./Contact";
import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../../assets/images/contact-image.png";
import SectionTitle from "../section-title/SectionTitle";
const title = `Get In Touch With Us`;
const text = `When unknow printer took a gallery of type and scramblted it to make a type specimen book`;
export default function GetInTouch() {
  return (
    <Container>
      <Row className="my-5 d-flex align-items-center">
        <Col className=" col-12  col-lg-6">
          <img src={contactImage} alt="contact" className="img-fluid" />
        </Col>
        <Col className=" col-12 col-lg-6">
          <SectionTitle title={title} description={text} />
          <Contact />
        </Col>
      </Row>
    </Container>
  );
}
