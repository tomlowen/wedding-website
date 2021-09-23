import { FormProvider } from "../../hooks/useFormContext";
import Form from "../Form";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
