import React from "react";
import Button from "../Button/Button";
import HeaderNavigation from "./HeaderNavigation";
import styles from "./Header.module.scss";

const Header = ({ openModalFunction }) => (
  <header className={styles.wrapper}>
    <h1 className={styles.logo}>notatnik</h1>
    <HeaderNavigation />
    <Button onClick={openModalFunction} secondary>
      new item
    </Button>
  </header>
);

export default Header;
