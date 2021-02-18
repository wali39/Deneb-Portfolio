import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "../navbar/Menu";
import styles from "./PageHeader.module.css";
export default function PageHeader({ title }) {
  return (
    <div className={styles.bg}>
      <Menu />
      <Container>
        <div className={styles.h2Padding}>
          <h2>{title} </h2>
          <Link to="/" className={styles.linkH}>
            Home
          </Link>
          &nbsp;
          <i className="fas fa-chevron-right"></i> &nbsp;
          <span className={styles.linkH}>{title}</span>
        </div>
      </Container>
    </div>
  );
}
