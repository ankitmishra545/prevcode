import React, { useContext } from "react";
import { CurrentUserContext } from "./ThirdContext";
import Button from "../components2/Button";

const LoginButton = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  if (currentUser !== null) {
    return <p>You Logged in as {currentUser.name}.</p>;
  }
  return (
    <Button
      onClick={() => {
        setCurrentUser({ name: "Advika" });
      }}
    >
      Log in as Advika
    </Button>
  );
};

export default LoginButton;
