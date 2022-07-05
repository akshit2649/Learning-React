import React from "react";
import Navbar from "./Navbar";
import mealsImage from "../../assets/meals.jpg";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="main-image">
        <img src={mealsImage} alt="A table of delicious meal" />
      </div>
    </>
  );
};

export default Header;
