import React from "react";
import { useFormContext } from "../../hooks/useFormContext";

function Button() {
  const { formData, handleFormSubmit } = useFormContext();
  return (
    <>
      <button onClick={() => handleFormSubmit(formData)}>RSVP!</button>
    </>
  );
}

export default Button;
