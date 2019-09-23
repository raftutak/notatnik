import React from "react";
import styles from "./FormRadio.module.scss";

const FormRadio = ({ id, checked, changeFunction, children }) => (
  <label className={styles.radio}>
    <input id={id} type="radio" checked={checked} onChange={changeFunction} />
    <div className={styles.radioButton} />
    {children}
  </label>
);

export default FormRadio;
