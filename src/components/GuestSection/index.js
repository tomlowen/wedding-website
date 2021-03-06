import Input from "../Input";
import Toggle from "../Toggle";

function GuestSection(guest) {
  const { name, diet, uuid, attending } = guest.guest;
  return (
    <>
      <div className="">
        <div className={"flex-row flex items-center pt-3 font-sans"}>
          <Input
            placeholder="Name"
            labelText="Name"
            inputName={"name"}
            value={name}
            guestUuid={uuid}
            size="normal"
          />
          <Toggle inputClass={"checkbox"} value={attending} guestUuid={uuid} />
        </div>
        <div className="pt-2 pb-5 font-sans">
          {attending && (
            <div className="dietaryRequirements">
              <Input
                type="text"
                placeholder="gluten intolerance, cheese addiction, etc."
                labelText="Dietary requirements?"
                inputName={"diet"}
                value={diet}
                guestUuid={uuid}
                size="small"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GuestSection;
