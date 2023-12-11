import React, { useContext } from "react";
import { CurrentUserContext } from "./FourthContext";
import Panel from "./Panel";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";

const WelcomePanel = ({ children }) => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Panel title="Welcome">
      {currentUser !== null ? <Greeting /> : <LoginForm />}
    </Panel>
  );
};

export default WelcomePanel;
