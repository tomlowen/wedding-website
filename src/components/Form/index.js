import React from "react";
import Input from "../Input";
import Button from "../Button";
import GuestSection from "../GuestSection";
import { useFormContext } from "../../hooks/useFormContext";

export const Form = () => {
  const { formData } = useFormContext();
  console.log(formData);
  return (
    <div
      id="rsvp"
      className="max-w-md border-gray-300 shadow-xs m-4 p-3 box-content border-2 rounded-2xl"
    >
      <h2 className="p-4 self-center text-2xl font-garamond">
        Please let us know who's coming
      </h2>
      {formData.map((guest, i) => {
        return <GuestSection guest={guest} key={i} />;
      })}
      <Input
        type="email"
        placeholder="How can we reach you all?"
        labelText="Email"
        inputName={"emailaddress"}
        guestUuid={"Apply_to_all"}
        value={formData.guest}
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
