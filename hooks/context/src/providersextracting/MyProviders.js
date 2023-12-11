import React, { useState } from "react";
import { ThemeContext, CurrentUserContext } from "./FifthContext";

const MyProviders = ({ theme, children, setTheme }) => {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MyProviders;
