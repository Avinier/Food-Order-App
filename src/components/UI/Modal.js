import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

export function Backdrop() {
  return <div className={classes.backdrop}></div>;
}

export function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
