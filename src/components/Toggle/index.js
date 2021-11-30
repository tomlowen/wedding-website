import TickIcon from "@mui/icons-material/Check";
import CrossIcon from "@mui/icons-material/Clear";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import { useFormContext } from "../../hooks/useFormContext";

export default function Toggle({ value, guestUuid }) {
  const { updateForm } = useFormContext();
  const [selected, setSelected] = useState(value);

  return (
    <div>
      <ToggleButton
        sx={{ px: 2, height: "100%" }}
        value="check"
        selected={selected}
        color="success"
        onChange={(e) => {
          updateForm("attending", !selected, guestUuid);
          setSelected(!selected);
        }}
      >
        {/* {selected == true && <TickIcon />} */}
        {/* {selected == false && <CrossIcon />} */}
      </ToggleButton>
    </div>
  );
}
