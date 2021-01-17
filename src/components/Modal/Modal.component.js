import React, { useState, useEffect } from "react";
import BackDrop from "../BackDrop/BackDrop.component";

import { AiFillCloseCircle } from "react-icons/ai";

import "./modal.styles.scss";

const Modal = (props) => {
  const { header, footer, children, width, height, styles, onClick } = props;

  const modalStyles = {
    width: width || "auto",
    height: height || "auto",
    ...styles,
  };
  return (
    <>
      <BackDrop onClick={onClick} />
      <div className='modal' style={modalStyles}>
        {/* <div className='hide-modal' onClick={onClick}>
          X
        </div> */}
        <AiFillCloseCircle onClick={onClick} className='hide-modal' />
        {header ? <div className='modal-header'>{header}</div> : null}
        <div className='modal-body'>{children}</div>
        {footer ? <div className='modal-footer'>{footer}</div> : null}
      </div>
    </>
  );
};

export default Modal;
