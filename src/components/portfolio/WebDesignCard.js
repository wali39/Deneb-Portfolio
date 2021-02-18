import React from "react";
import { Card } from "react-bootstrap";
import styles from "./Portfolio.module.css";
export default function WebDesign({ imageSrc, title, description }) {
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
