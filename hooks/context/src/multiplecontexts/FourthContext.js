import React, { createContext, useState } from "react";
import WelcomePanel from "./WelcomePanel";

export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

const FourthContext = () => {
  const [theme, setTheme] = useState("light");
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <ThemeContext.Provider value={theme}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <WelcomePanel />
        <label>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          />
          Use Dark Mode
        </label>
      </CurrentUserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default FourthContext;
