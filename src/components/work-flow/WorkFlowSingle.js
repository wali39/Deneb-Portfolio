import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./WorkFlow.module.css";

export default function WorkFlowSingle({
  imageSrc,
  title,
  description,
  order,
  icon,
}) {
  return (
    <Row className="my-3 d-flex justify-content-center align-items-center ">
      <Col className={`col-12 col-md-6 order-${order ? "first" : "last"}`}>
        <img src={imageSrc} alt="service 1" className="img-fluid" />
      </Col>
      <Col className={`col-12 col-md-6 text-${order ? "right" : "left"}`}>
        <h6 className={styles.iconImg}>
          <img src={icon} alt="icon" />
        </h6>

        <h3 className="font-weight-bolder">{title}</h3>
        <p className="text-black-50">{description}</p>
      </Col>
    </Row>
  );
}
