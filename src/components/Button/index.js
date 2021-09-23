import React from "react";
import { useFormContext } from "../../hooks/useFormContext";

function Button() {
  const { formData, handleFormSubmit } = useFormContext();
  return (
    <>
      <label>Button Label</label>
      <button onClick={() => handleFormSubmit(formData)}>Send response</button>
    </>
  );
}

export default Button;
