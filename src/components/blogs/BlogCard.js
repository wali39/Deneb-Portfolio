import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Blogs.module.css";
export default function BlogCard({
  imageSrc,
  title,
  date,
  text,
  buttonText,
  id,
}) {
  return (
    <Card className={styles.blogsCard}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span className={styles.bgText}>{date}</span>
          <span className={styles.textClip}> {text}</span>
        </Card.Text>

        <Link to={`/blogs/${id}`}>
          <Button variant="light" className="text-center d-flex align-items-center" >
            <i
              className="fas fa-caret-right px-2 "
              style={{ fontSize: "25px", color: "orange" }}
            ></i>
            {buttonText}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
