import React, { useState, useContext, createContext, useEffect } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const partyUuid = window.location.search.slice(6);

  useEffect(() => {
    async function getInitialFormData() {
      try {
        const res = await fetch(
          `https://lowen-wedding-db.herokuapp.com/guests?uuid=${partyUuid}`
        );
        const data = await res.json();
        setFormData(data.payload);
      } catch (error) {
        console.error(error);
      }
    }
    getInitialFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [formData, setFormData] = useState([]);

  function updateForm(inputName, eventValue, guestUuid) {
    const newFormData = formData.map((guest) => {
      if (guest.uuid === guestUuid || guestUuid === "Apply_to_all") {
        return { ...guest, [inputName]: eventValue };
      }
      return guest;
    });
    setFormData(newFormData);
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
