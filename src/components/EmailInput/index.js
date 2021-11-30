import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useFormContext } from "../../hooks/useFormContext";

export default function EmailInput() {
  const { formData, updateForm } = useFormContext();
  const emailArray = formData[0].emailaddresses.map(
    (person) => person.emailaddress
  );
  return (
    <Stack spacing={3} sx={{ width: "90%", pt: 2 }}>
      <Autocomplete
        multiple
        options={emailArray}
        defaultValue={emailArray}
        freeSolo
        clearOnBlur
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            return (
              <Chip
                variant="outlined"
                label={option}
                {...getTagProps({ index })}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Email address"
            placeholder="Add more email addressess"
            onBlur={() => {
              const x = document.querySelectorAll(".MuiChip-label");
              const newEmailList = [];
              x.forEach((item) => newEmailList.push(item.innerText));
              updateForm("emailaddress", String(newEmailList), "Apply_to_all");
            }}
          />
        )}
      />
    </Stack>
  );
}
