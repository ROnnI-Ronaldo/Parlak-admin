import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 250,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectNative = (props) => {
  const classes = useStyles();

  const {
    label,
    options,
    onChange,
    labelField,
    valueField,
    value,
    width,
    styles,
  } = props;

  const selectStyles = {
    width: width || "auto",
    ...styles,
  };

  return (
    <div style={selectStyles}>
      <InputLabel htmlFor='age-native-simple'>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        style={{ width: width || "auto" }}
      >
        {options && options.length > 0
          ? options.map((option, index) => (
              <option
                style={{ cursor: "pointer" }}
                value={option[valueField]}
                key={index}
              >
                {option[labelField]}
              </option>
            ))
          : null}
      </Select>
    </div>
  );
};

export default SelectNative;
