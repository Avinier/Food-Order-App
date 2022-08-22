import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import Cart from "../Cart/Cart";
import classes from "./Navbar.module.css";

export default function Navbar(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <Cart onClick={props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meal table" />
      </div>
    </Fragment>
  );
}
