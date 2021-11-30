import React from "react";
import Input from "../Input";
import SubmitButton from "../Button";
import GuestSection from "../GuestSection";
import { useFormContext } from "../../hooks/useFormContext";
// import EmailInput from "../EmailInput";

export const Form = () => {
  const { formData } = useFormContext();
  const anyoneAttending =
    formData.filter((attendance) => attendance.attending).length > 0
      ? true
      : false;

  return (
    <div id="rsvp" className="flex-col flex items-center font-bookman">
      <h2 className="text-5xl pb-10 pt-10 self-center text-2xl ">RSVP</h2>
      {formData[0] && (
        <form className="max-w-lg border-gray-300 shadow-xs m-4 p-3 mb-10 box-content border-2 rounded-xl flex-col flex items-center">
          {formData.map((guest, i) => {
            return <GuestSection guest={guest} key={i} />;
          })}
          {/* <EmailInput /> */}
          {anyoneAttending && (
            <div className="w-11/12 pb-4">
              <Input
                labelText="Song requests"
                inputName={"songrequest"}
                guestUuid={"Apply_to_all"}
              />
            </div>
          )}

          <SubmitButton />
        </form>
      )}
    </div>
  );
};
