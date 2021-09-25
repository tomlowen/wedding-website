import React, { useState, useContext, createContext, useEffect } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  useEffect(() => {
    async function getInitialFormData() {
      const res = await fetch("https");
      const data = res.json();
      setFormData(data);
    }
    getInitialFormData();
  }, []);

  const [formData, setFormData] = useState([]);

  function updateForm(inputName, eventValue) {
    console.log(formData);
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
