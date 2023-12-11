import React, { useContext } from "react";
import { CurrentUserContext } from "./FifthContext";

const Greeting = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You Loged in as {currentUser.name}.</p>;
};

export default Greeting;
