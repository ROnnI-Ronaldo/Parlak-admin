import React from "react";
import TextField from "@material-ui/core/TextField";
import { inputTypes } from "./inputTypes";

const Input = (props) => {
  const {
    type,
    inputType,
    label,
    autoComplete,
    styles,
    width,
    ...otherProps
  } = props;

  const inputStyles = {
    width: width || "auto",
    ...styles,
  };

  return (
    <TextField
      id={
        inputTypes[inputType]
          ? inputTypes[inputType] + "-basic"
          : "standard-basic"
      }
      label={label}
      type={type}
      {...otherProps}
      style={inputStyles}
    />
  );
};

export default Input;
