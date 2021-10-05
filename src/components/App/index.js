import { FormProvider } from "../../hooks/useFormContext";
import Form from "../Form";
import "./App.css";
import React from "react";
import content from "../../content";
import Section from "../Section";
import NavBar from "../NavBar";

function App() {
  return (
    <>
      <div className="App">
        <NavBar content={content} />
        <div className="content">
          {content.map((section) => (
            <Section
              id={section.title}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
        <FormProvider>
          <Form />
        </FormProvider>
      </div>
    </>
  );
}

export default App;
