import React from "react";

import MenuItem from "./MenuItem";
import classes from "./MenuItems.module.css";

export default function MenuItems(props) {
  return (
    <ul className={classes.meals}>
      {props.data.map((item) => {
        return (
          <MenuItem
            key={item.id}
            id={item.id}
            title={item.name}
            caption={item.description}
            price={item.price}
          />
        );
      })}
    </ul>
  );
}
