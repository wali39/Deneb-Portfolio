import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogPost.module.css";
export default function BlogPost({ imageSrc, title, date, id }) {
  return (
    <div className={styles.post}>
      <Link to={`/blogs/${id}`}>
        <div className="row my-3 p-2 d-flex align-items-center">
          <div className="col-6">
            <img src={imageSrc} alt="post 1" className="img-fluid" />
          </div>
          <div className="col-6">
            <h6>{title}</h6>
            <p className={styles.pStyled}>{date}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
