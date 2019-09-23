import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.scss";

const List = ({ items }) => (
  <>
    {items.length ? (
      <ul className={styles.wrapper}>
        {items.map(item => (
          // spread operator ...item, rozsmarowuje zawartosc obiektu
          <ListItem key={item.title} {...item} />
        ))}
      </ul>
    ) : (
      <h2 className={styles.noItems}>
        There is nothing here yet, please add a new content! 😎
      </h2>
    )}
  </>
);

export default List;
