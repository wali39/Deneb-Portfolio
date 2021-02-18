import React from "react";
import styles from "./SectionTitle.module.css";
export default function SectionTitle({ title, description, className }) {
  return (
    <div className={styles.sectionTitle}>
      <div className={className}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
