import React from "react";
import Input from "../Input";
import Button from "../Button";

const Form = () => (
  <div className="form">
    <Input
      type="text"
      placeholder="Who are you?"
      labelText="Name"
      inputName={"name"}
    />
    <Input
      type="email"
      placeholder="How can we reach you?"
      labelText="Email"
      inputName={"email"}
    />
    <Input
      type="text"
      placeholder="gluten intolerance, cheese addiction, etc."
      labelText="Dietary requirements?"
      inputName={"diet"}
    />
    <Input
      type="text"
      placeholder=""
      labelText="Please tell us what you want to dance to"
      inputName={"songChoice"}
    />
    <Button />
  </div>
);

export default Form;
