import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useFormContext } from "../../hooks/useFormContext";

// inputClass={
//     "bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-pink-600"
//   }

export default function EmailInput() {
  const { formData, updateForm } = useFormContext();
  let emailList = formData[0].emailaddress.split(", ")
  console.log(formData[0].emailaddress)
  return (
    <Stack spacing={3} sx={{ width: "100%", pt: 2 }}>
      <Autocomplete
        multiple
        id="tags-filled"
        options={[formData[0].emailaddress]}
        defaultValue={[]}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            console.log(value);
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
            placeholder="Add another email"
            onBlur={() => {
              const x = document.querySelectorAll(".MuiChip-label");
              const newEmailList = [];
              x.forEach((item) => newEmailList.push(item.innerText));
              updateForm({ ...formData, emailaddress: String(newEmailList) });
            }}
          />
        )}
      />
    </Stack>
  );
}
