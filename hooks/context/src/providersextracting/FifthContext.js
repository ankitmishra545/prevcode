import React, { createContext, useState } from "react";
import MyProviders from "./MyProviders";
import WelcomePanel from "./WelcomePanel";

export const ThemeContext = createContext(null);
export const CurrentUserContext = createContext(null);

const FifthContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <MyProviders theme={theme} setTheme={setTheme}>
      <WelcomePanel />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        Use dark mode
      </label>
    </MyProviders>
  );
};

export default FifthContext;
