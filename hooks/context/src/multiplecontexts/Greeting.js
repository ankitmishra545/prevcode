import React, { useContext } from "react";
import { CurrentUserContext } from "./FourthContext";

const Greeting = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return <p>You Loged in as {currentUser.name}.</p>;
};

export default Greeting;
