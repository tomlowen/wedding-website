import { useFormContext } from "../../hooks/useFormContext";

function Input({
  inputName,
  placeholder,
  type,
  labelText,
  value,
  guestUuid,
  spanClass,
  inputClass,
}) {
  const { updateForm } = useFormContext();
  return (
    <>
      <label>
        {labelText}
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
        <span className={spanClass}></span>
      </label>
    </>
  );
}
export default Input;
