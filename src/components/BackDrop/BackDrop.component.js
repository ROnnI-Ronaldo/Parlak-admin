import React, { useState } from "react";

import "./backDrop.styles.scss";

const BackDrop = ({ onClick }) => {
  return <div className='backdrop' onClick={onClick}></div>;
};

export default BackDrop;
