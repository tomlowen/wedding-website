import React from "react";
import Input from "../Input";
import Button from "../Button";
import GuestSection from "../GuestSection";
import { useFormContext } from "../../hooks/useFormContext";

const Form = () => {
  const { formData } = useFormContext();
  console.log(formData);
  return (
    <div className="form">
      <h2>Please let us know who's coming</h2>
      {formData.map((guest, i) => {
        return <GuestSection guest={guest} key={i} />;
      })}
      <Input
        type="email"
        placeholder="How can we reach you all?"
        labelText="Email"
        inputName={"emailaddress"}
        guestUuid={"Apply_to_all"}
      />
      <Input
        type="text"
        placeholder=""
        labelText="Please tell us what you want to dance to"
        inputName={"songrequest"}
        guestUuid={"Apply_to_all"}
      />
      <Button />
    </div>
  );
};

export default Form;
