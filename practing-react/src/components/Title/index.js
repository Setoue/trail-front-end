import React, { Children } from "react";
import styles from "./Title.module.css";

const Title = ({ children }) => {
  return <div className={styles.title}>{children}</div>;
};

export default Title;
