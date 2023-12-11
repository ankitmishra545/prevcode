import React from "react";
import Panel from "./Panel";
import LoginButton from "./LoginButton";

const Form = ({ children }) => {
  return (
    <Panel title="Welcome">
      <LoginButton />
    </Panel>
  );
};

export default Form;
