import React from "react";
// import { Row, Col, Container } from "react-bootstrap";
import styles from "./ProgressBar.module.css";
export default function ProgressBar({ title, percent }) {
  return (
    <>
      <div className={styles.progressWrapper}>
        <div className={styles.progressTitle}>
          <h5>
            {title} <span>{percent}%</span>
          </h5>
        </div>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${percent}%` }}>
            <div className={styles.dot}></div>
          </div>
        </div>
      </div>
    </>
  );
}
