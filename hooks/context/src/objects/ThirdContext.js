import React, { createContext, useState } from "react";
import Form from "./Form";

export const CurrentUserContext = createContext(null);

const ThirdContext = () => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <Form />
    </CurrentUserContext.Provider>
  );
};

export default ThirdContext;
