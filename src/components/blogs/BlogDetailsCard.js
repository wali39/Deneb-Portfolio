import React from "react";
import styles from "./BlogCardLarge.module.css";
export default function BlogDetailsCard({
  imageSrc,
  date,
  author,
  description,
}) {
  return (
    <div className="my-3">
      <div className={styles.imageDiv}>
        <img src={imageSrc} alt="blog1" />
      </div>
      <div className="my-2">
        <ul className={styles.unorderedList}>
          <li>
            <i className="fas fa-clock"></i> {date}
          </li>
          <li>
            <i className="fas fa-user"></i>
            {author}
          </li>
        </ul>
      </div>
      <div className="my-2 text-justify">
        <p>{description}</p>
      </div>
    </div>
  );
}
