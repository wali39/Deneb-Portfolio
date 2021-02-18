import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./ServiceCard.module.css";

export default function ServiceHomeCard({ title, imageSrc, text, buttonText }) {
  return (
    <Card className={styles.serviceCard}>
      <Card.Body className=" d-flex flex-column justify-content-center align-items-center">
        <span>
          <img src={imageSrc} alt="service1" />
        </span>
        <Card.Title className="my-3">
          <h3>{title}</h3>
        </Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button
          variant="light"
          className="text-center d-flex align-items-center"
        >
          <i
            className="fas fa-caret-right px-2 "
            style={{ fontSize: "25px", color: "orange" }}
          ></i>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
