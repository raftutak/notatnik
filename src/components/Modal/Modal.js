import React from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";

const Modal = ({ closeModalFunction }) => (
  <div className={styles.wrapper}>
    <button className={styles.closeButton} onClick={closeModalFunction} />
    <Form />
  </div>
);

export default Modal;
