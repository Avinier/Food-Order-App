import React, { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import classes from "./Cart.module.css";
import MealContext from "../../store/meals-context";

export default function Cart(props) {
  const cartCtx = useContext(MealContext);
  const [btnHighlight, setBtnHighlight] = useState(false);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${btnHighlight ? classes.bump : " "}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnHighlight(true);

    const timer = setTimeout(() => {
      setBtnHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const nofCartItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{nofCartItems}</span>
    </button>
  );
}
