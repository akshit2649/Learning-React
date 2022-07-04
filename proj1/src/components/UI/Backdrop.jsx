import React from "react";

const Backdrop = ({ children, onConfirm }) => {
  return (
    <div className="backdrop" onClick={onConfirm}>
      {children}
    </div>
  );
};

export default Backdrop;
