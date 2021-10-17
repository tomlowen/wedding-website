import React from "react";
import Input from "../Input";
import Button from "../Button";
import GuestSection from "../GuestSection";
import { useFormContext } from "../../hooks/useFormContext";

export const Form = () => {
  const { formData } = useFormContext();
  console.log(formData);
  return (
    <div id="rsvp" className="flex-col flex items-center font-bookman">
      <h2 className="text-5xl pb-20 pt-20 self-center text-2xl ">RSVP</h2>
      <div className="max-w-lg border-gray-300 shadow-xs m-4 p-3 box-content border-2 rounded-xl flex-col flex items-center">
        {formData.map((guest, i) => {
          return <GuestSection guest={guest} key={i} />;
        })}
        <Input
          type="email"
          placeholder="How can we reach you all?"
          labelText="Email"
          inputName={"emailaddress"}
          guestUuid={"Apply_to_all"}
          value={formData}
          inputClass={
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
          }
        />
        <Input
          type="text"
          placeholder=""
          labelText="Please tell us what you want to dance to"
          inputName={"songrequest"}
          guestUuid={"Apply_to_all"}
          inputClass={
            "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
          }
        />
        <Button />
      </div>
    </div>
  );
};
