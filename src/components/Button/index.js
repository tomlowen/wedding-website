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

  const allNamesEntered = formData.every((guest) => guest.name);

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
      disabled={allGuestsRSVP && allNamesEntered ? false : true}
    >
      RSVP!
    </Button>
  );
}

export default SubmitButton;
