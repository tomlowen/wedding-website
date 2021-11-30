import { useFormContext } from "../../hooks/useFormContext";

import { TextField } from "@mui/material";
import React from "react";

const Input = ({ inputName, placeholder, labelText, value, guestUuid, size }) => {
  const { updateForm } = useFormContext();
  return (
    <div>
      <TextField
        autoComplete="off"
        id="standard-basic"
        label={labelText}
        placeholder={placeholder}
        onChange={(e) => updateForm(inputName, e.target.value, guestUuid)}
        defaultValue={value}
        variant="outlined"
        size={size}
        fullWidth
      />
    </div>
  );
};

export default Input;
