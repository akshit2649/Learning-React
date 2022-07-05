import React from "react";
import CartButton from "./CartButton";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-red-600 px-[100px] h-[80px] items-center w-[100%] ">
      <p className="text-white font-bold text-3xl ">ReactMeals</p>
      <CartButton />
    </div>
  );
};

export default Navbar;
