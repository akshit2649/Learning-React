import React from "react";
import CartIcon from "../Icons/CartIcon";

const CartButton = () => {
  return (
    <button className="flex text-white  text-lg bg-red-900 justify-center items-center px-10 py-2 rounded-full">
      <span className="h-5 w-5 text-white m-2">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="px-4 bg-red-500 mx-3 rounded-2xl"> 3</span>
    </button>
  );
};

export default CartButton;
