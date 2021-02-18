import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.png";
export default function Footer() {
  return (
    <>
      <Container className="mt-5">
        <Row className={styles.h3}>
          <Col className="col-12 col-md-4 my-3">
            <div className="w-50 my-3">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <p className="text-black-50">
              Quisque orci nisl, viverra et sem ac, tincidunt egestas massa.
              Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec
              tortor praesent consequat urna.
            </p>
            <div className={styles.icon}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </Col>
          <Col className="col-12 col-md-4 my-3">
            <h3>Links</h3>
            <ul className={styles.uL}>
              <li>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-12 col-md-4 my-3">
            <h3>Contact Us</h3>
            <ul className={styles.uL}>
              <li>
                <div>
                  <i className="fas fa-phone-square"></i>
                </div>
                <div>
                  <p>1800-121-3637 </p>
                  <p>+91 924-614-7999</p>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <p>admin@wali.com</p>
                  <p>service@gmail.com</p>
                </div>
              </li>
              <li>
                <div>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <p>Bhangura </p>
                  <p>Pabna,Rajshahi,Bangladesh</p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="bg-light py-3 text-center">
        <p>
          Copyright &copy; 2021 &nbsp;
          <span style={{ color: "#feb000", fontWeight: "600" }}>
            Wali Ullah
          </span>
          &nbsp; All Rights Reserved
        </p>
        <p className="p-0 m-0">Developed By Wali Ullah</p>
      </div>
    </>
  );
}
