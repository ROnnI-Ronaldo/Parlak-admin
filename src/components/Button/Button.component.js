import React from "react";
import Button from "@material-ui/core/Button";
import { buttonVariants } from "./buttonVariants";
import { OutlinedButton } from "./button.styles";

import "./button.styles.scss";

const CustomButton = (props) => {
  const {
    label,
    variant,
    color,
    width,
    styles,
    onClick,
    ...otherProps
  } = props;

  const buttonStyles = {
    width: width || "auto",
    ...styles,
  };

  return (
    <>
      {variant === "outline" ? (
        <OutlinedButton>{label}</OutlinedButton>
      ) : (
        <Button
          style={{ ...buttonStyles }}
          variant={buttonVariants[variant] || "contained"}
          color={color}
          onClick={onClick}
          {...otherProps}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export default CustomButton;
