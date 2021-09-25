import Input from "../Input";

function GuestSection(guest) {
  const { name, diet, uuid, confirmedattendance } = guest.guest;
  console.log(confirmedattendance);
  return (
    <>
      <div className="guestSection">
        <div className="namersvp">
          <Input
            type="text"
            placeholder="Who are you?"
            labelText=""
            inputName={"name"}
            value={name}
            guestUuid={uuid}
          />
          <Input
            type="checkbox"
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
