import { useFormContext } from "../../hooks/useFormContext";

function Input({ inputName }) {
  const { updateForm } = useFormContext();
  return <input onChange={(e) => updateForm(inputName, e.target.value)} />;
}
export default Input;
