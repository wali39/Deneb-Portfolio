import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import styles from "./Experience.module.css";

export default function Experience({
  description,
  name,
  order,
  category,
  id,
  duration,
}) {
  return (
    <div className={styles.singleExperience}>
      <div className="row d-flex align-items-center">
        <div className={`col-md-5 ${order ? "order-first" : "order-last"}`}>
          <div className={styles.textBox}>
            <p>{description}</p>
          </div>
        </div>
        <div
          className={`col-md-2 ${id === "3" ? `${styles.removeDotLine}` : ""}`}
        >
          <div className={styles.icon}>
            <h3>{id}</h3>
          </div>
        </div>
        <div className={`col-md-5 ${order ? "order-last" : "order-first "}`}>
          <div
            className={`${styles.infoBox} ${
              order ? "text-right" : "text-left "
            }`}
          >
            <h4>{category}</h4>
            <h5>{name}</h5>
            <h6>{duration}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
