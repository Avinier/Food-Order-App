import React, { useContext } from "react";
import MealContext from "../../store/meals-context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./CartModal.module.css";

export default function CartModal(props) {
  const cartItemCtx = useContext(MealContext);

  function removeHandler(id) {}

  function addHandler(item) {
    cartItemCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartItemCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Items</span>
        <span>${cartItemCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseClick}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
