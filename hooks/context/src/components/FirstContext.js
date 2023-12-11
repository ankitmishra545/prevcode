import React, { createContext, useState } from "react";
import Form from "./Form";

export const ThemeContext = createContext("light");

const FirstContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Form />
      <label>
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
      </label>
    </ThemeContext.Provider>
  );
};

export default FirstContext;
