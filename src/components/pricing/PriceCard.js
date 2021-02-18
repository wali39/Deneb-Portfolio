import React from "react";
import { Card, Button } from "react-bootstrap";
import styles from "./Price.module.css";

export default function ServiceCard({
  title,
  imageSrc,
  text,
  buttonText,
  price,
}) {
  return (
    <Card className={styles.serviceCard}>
      <Card.Body className=" d-flex flex-column justify-content-center align-items-center">
        <span>
          <img src={imageSrc} alt="service1" />
        </span>
        <Card.Title className="my-3">
          <h3>{title}</h3>
        </Card.Title>
        {text}
        <h1 className="my-4">{price}</h1>
        <Button variant="warning" className={styles.priceBtn}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}
