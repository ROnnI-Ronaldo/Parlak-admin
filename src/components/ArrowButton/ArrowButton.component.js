import React from "react";

import "./arrowButton.styles.scss";

const ArrowButton = ({ open }) => {
  return (
    <div className='button-container'>
      <div className={`sticky ${open ? "open" : ""} `}></div>
    </div>
  );
};

export default ArrowButton;
