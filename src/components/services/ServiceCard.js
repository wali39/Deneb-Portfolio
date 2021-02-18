import React from "react";
import { Row, Col } from "react-bootstrap";
import SectionTitle from "../section-title/SectionTitle";
// const title = `Web Design`;
export default function ServiceCard({ text, title, imageSrc }) {
  return (
    <Row className="my-5 mx-0 d-flex align-items-center">
      <Col className="col-12 col-lg-6">
        <SectionTitle title={title} />
        <div className="w-100 py-3 text-justify">{text}</div>
      </Col>
      <Col className="col-12 col-lg-6">
        <img
          src={imageSrc}
          alt="test"
          className="img-fluid"
          style={{ borderRadius: "10px" }}
        />
      </Col>
    </Row>
  );
}
