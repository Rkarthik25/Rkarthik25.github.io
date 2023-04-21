import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cp}>
        &#169; 2023 Designed and Built by Karthikeyan Rajan with ❤️
      </div>
    </div>
  );
};

export { Footer };
