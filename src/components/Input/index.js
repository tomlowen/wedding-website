import { useFormContext } from "../../hooks/useFormContext";

function Input({
  inputName,
  placeholder,
  type,
  labelText,
  value,
  guestUuid,
  inputClass,
}) {
  const { updateForm } = useFormContext();
  return (
    <div>
      <label>{labelText}</label>
      <input
        className={inputClass}
        type={type}
        placeholder={placeholder}
        onChange={(e) =>
          updateForm(
            inputName,
            type === "checkbox" ? e.target.checked : e.target.value,
            guestUuid
          )
        }
        value={value}
      />
    </div>
  );
}
export default Input;
