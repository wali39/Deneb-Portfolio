import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styles from "./BlogCardLarge.module.css";
export default function BlogCardLarge({
  imageSrc,
  date,
  author,
  title,
  description,
  id,
}) {
  return (
    <div className="my-3">
      <div className={styles.imageDiv}>
        <img src={imageSrc} alt="blog1" />
      </div>
      <div className="my-2">
        <ul className={styles.unorderedList}>
          <li>
            <i class="fas fa-clock"></i> {date}
          </li>
          <li>
            <i class="fas fa-user"></i>
            {author}
          </li>
        </ul>
      </div>
      <div className="my-2 text-justify">
        <h2>{title}</h2>
        <p className={styles.textClip}>{description}</p>
        <Link to={`/blogs/${id}`}>
          <Button
            variant="light"
            className="text-center d-flex align-items-center"
          >
            <i
              className="fas fa-caret-right px-2 "
              style={{ fontSize: "25px", color: "orange" }}
            ></i>
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
}
