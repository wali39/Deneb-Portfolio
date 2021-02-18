import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../../assets/images/home-image.png";
import styles from "./HomeHeader.module.css";
export default function HomeHeader() {
  return (
    <Container>
      <Row className="d-flex align-items-center">
        <Col className="col-lg-5 col-12">
          <h1 className={styles.h1}>
            We are Creative<br></br> <span> Dev Agency</span>
          </h1>
          <h4 className={styles.h4}>I am professional freelance Web Designer</h4>
          <p>
            Let Know Our Expert Skills Curabitur libero eros, efficitur sit amet
            sodales tincidunt, aliquet et leo. Sed ut nibh feugiat, auctor enim
          </p>
          <button className={styles.buttonHire}>Hire Me</button>
        </Col>
        <Col className="col-lg-7 col-12">
          <img src={image1} alt="home" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
