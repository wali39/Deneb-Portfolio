import React from "react";
import { Link } from "react-router-dom";

import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import styles from "./Menu.module.css";
export default function Menu() {
  return (
    <Navbar expand="lg" className="py-4 pb-5">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img className={styles.logoStyed} src={logo} alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>

            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/portfolio">
              Portfolio
            </Nav.Link>

            <Nav.Link as={Link} to="/blogs">
              Blogs
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>

            <Nav.Link
              className="btn btn-outline-warning px-4 mx-5 buttonHire"
              href="#"
            >
              Hire Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
