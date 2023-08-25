import React from "react";
import styles from "./Containuer.module.css";
const Containuer = ({ children }) => {
  return <section className={styles.containuer}>{children}</section>;
};

export default Containuer;
