import { useFormContext } from "../../hooks/useFormContext";

function Input({ inputName, placeholder, type, labelText }) {
  const { updateForm } = useFormContext();
  return (
    <>
      <label>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => updateForm(inputName, e.target.value)}
      />
    </>
  );
}
export default Input;
