import TickIcon from "@mui/icons-material/Check";
import CrossIcon from "@mui/icons-material/Clear";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import { useFormContext } from "../../hooks/useFormContext";

export default function Toggle({ value, guestUuid }) {
  const { updateForm } = useFormContext();
  const [selected, setSelected] = useState(value);

  return (
    <div className="flex-row flex items-center">
      <div className="p-2">
        <ToggleButton
          sx={{ px: 2, height: "100%" }}
          selected={selected === false}
          color="error"
          onChange={() => {
            updateForm("attending", false, guestUuid);
            setSelected(false);
          }}
        >
          <CrossIcon />
        </ToggleButton>
      </div>
      <div className="p-2">
        <ToggleButton
          sx={{ px: 2, height: "100%" }}
          selected={selected}
          color="success"
          onChange={() => {
            updateForm("attending", true, guestUuid);
            setSelected(true);
          }}
        >
          <TickIcon />
        </ToggleButton>
      </div>
    </div>
  );
}
