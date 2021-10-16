import { useState } from "react";
import Input from "../Input";

function GuestSection(guest) {
  const { name, diet, uuid, confirmedattendance } = guest.guest;

  const [dietInputDisplay, setDietInputDisplay] = useState(false)

  return (
    <>
      <div className="pt-5">
        <div className={"flex-row flex items-center"}>
          <Input
            inputClass={
              "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
            }
            type="text"
            placeholder="Who are you?"
            labelText="Name"
            inputName={"name"}
            value={name}
            guestUuid={uuid}
          />
          <Input
            type="checkbox"
            inputClass={"checkbox"}
            inputName={"confirmedattendance"}
            value={confirmedattendance}
            guestUuid={uuid}
          />
          <div className="dietaryRequirements">
            <Input
              type="text"
              placeholder="gluten intolerance, cheese addiction, etc."
              labelText="Dietary requirements?"
              inputName={"diet"}
              value={diet}
              guestUuid={uuid}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GuestSection;
