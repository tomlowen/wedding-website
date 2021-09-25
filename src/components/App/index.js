import { FormProvider } from "../../hooks/useFormContext";
import Form from "../Form";
import "./App.css";
import heroImage from "../../images/hero-image.svg";

function App() {

  return (
    <div className="App">
      <img
        className="w-full max-w-lg mt-16 mx-auto sm:w-1/2"
        src={heroImage}
        alt="Tom and Frankie together"
      />
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
