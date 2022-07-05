import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-red-600 px-[100px] h-[80px] items-center">
      <p className="text-white font-bold text-3xl ">ReactMeals</p>
      <button className="bg-white rounded-md px-5 py-0.5 text-lg">Cart</button>
    </div>
  );
};

export default Navbar;
