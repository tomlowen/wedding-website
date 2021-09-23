import React, { useState, useContext, createContext } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({});

  function updateForm(inputName, eventValue) {
    setFormData({ ...formData, [inputName]: eventValue });
  }

  function handleFormSubmit(payload) {
    console.log(payload);
    // send form data to database
    // load thank you message
  }

  return (
    <FormContext.Provider value={{ formData, updateForm, handleFormSubmit }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
