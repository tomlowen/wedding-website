import { FormProvider } from "../../hooks/useFormContext";
import { Form } from "../Form";
import "./App.css";
import React from "react";
import content from "../../content";
import Section from "../Section";
import NavBar from "../NavBar";
import { ControlledCarousel } from "../Carousel";

function App() {
  return (
    <>
      <div className="App">
        <NavBar content={content} />
        <ControlledCarousel />
        <div className="content">
          {content.map((section, index) => (
            <Section
              index={index}
              id={section.title}
              title={section.title}
              content={section.content}
              image={section.image}
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
