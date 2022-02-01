import React from "react";
import Button from "@mui/material/Button";
import { useFormContext } from "../../hooks/useFormContext";

function SubmitButton({ setOpen }) {
  const { formData, handleFormSubmit } = useFormContext();
  const allGuestsRSVP =
    formData.filter((attendance) => attendance.attending !== null).length ===
    formData.length
      ? true
      : false;

  function handleClick(formData) {
    setOpen(true);
    handleFormSubmit(formData);
  }

  return (
    <Button
      onClick={() => handleClick(formData)}
      color="secondary"
      variant="contained"
      size="large"
      disabled={allGuestsRSVP ? false : true}
    >
      RSVP!
    </Button>
  );
}

export default SubmitButton;
