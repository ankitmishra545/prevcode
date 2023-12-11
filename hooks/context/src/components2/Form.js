import React from "react";
import Button from "./Button";
import Panel from "./Panel";

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </Panel>
  );
};

export default Form;
