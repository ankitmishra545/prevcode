import React, { useContext } from "react";
import Panel from "./Panel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";
import { CurrentUserContext } from "./FifthContext";

const WelcomePanel = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
};

export default WelcomePanel;
