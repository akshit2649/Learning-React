import React from "react";
import Backdrop from "./Backdrop";
import Card from "./Card";

const Modal = ({ title, message, onConfirm }) => {
  return (
    <Backdrop onConfirm={onConfirm}>
      <Card>
        <div className="title">{title}</div>
        <p className="message">{message}</p>
        <button onClick={onConfirm}>Ok</button>
      </Card>
    </Backdrop>
  );
};

export default Modal;
