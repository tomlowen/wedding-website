import React, { useState, useContext, createContext, useEffect } from "react";

const FormContext = createContext();

const url = "https://lowen-wedding-db.herokuapp.com";
// const url = "http://localhost:3000";

export function FormProvider({ children }) {
  //save url paramater as a variable
  // eslint-disable-next-line no-unused-vars
  const [partyUuid, setPartyUuid] = useState(window.location.search.slice(6));
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasResponded, setHasResponded] = useState(false);

  // set form data to equal what is returned from the API . Calls Api on page load
  useEffect(() => {
    async function getInitialFormData() {
      try {
        const res = await fetch(`${url}/guests?uuid=${partyUuid}`);
        const data = await res.json();
        setFormData(data.payload);
        setHasResponded(data.payload[0].responded);
      } catch (error) {
        console.error(error);
      }
    }
    getInitialFormData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateForm(inputName, eventValue, guestUuid) {
    console.log(formData);
    const newFormData = formData.map((guest) => {
      if (guest.uuid === guestUuid || guestUuid === "Apply_to_all") {
        return { ...guest, [inputName]: eventValue };
      }
      return guest;
    });
    setFormData(newFormData);
  }

  function handleFormSubmit(payload) {
    setLoading(true);
    payload.forEach(async (person) => {
      person.responded = true;
      try {
        await fetch(`${url}/guests/${person.uuid}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(person),
        });
      } catch (error) {}
      setLoading(false);
    });

    // load thank you message
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        updateForm,
        handleFormSubmit,
        loading,
        setLoading,
        hasResponded,
        partyUuid,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
