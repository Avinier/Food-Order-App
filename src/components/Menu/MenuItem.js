import React, { useRef, useContext } from "react";
import MealContext from "../../store/meals-context";

import Input from "../UI/Input";
import classes from "./MenuItem.module.css";

export default function MenuItem(props) {
  const inputRef = useRef();
  const mealCtx = useContext(MealContext);

  function addToCart(amt) {
    mealCtx.addItem({
      id: props.id,
      name: props.title,
      amount: amt,
      price: props.price,
    });
  }

  function submitHandler(e) {
    e.preventDefault();

    const enteredAmt = inputRef.current.value;
    const enteredAmtNum = +enteredAmt;

    addToCart(enteredAmtNum);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.title}</h3>
        <p className={classes.description}>{props.caption}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div>
        <form className={classes.form} onSubmit={submitHandler}>
          <Input
            ref={inputRef}
            label="Amount"
            input={{
              id: "amt_" + props.id,
              type: "number",
              min: "1",
              max: "5",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button>+Add</button>
        </form>
      </div>
    </li>
  );
}
