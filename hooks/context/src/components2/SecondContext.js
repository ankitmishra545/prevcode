import React, { createContext, useState } from "react";
import Form from "./Form";
import Button from "./Button";

export const ThemeContext = createContext("light"); //keeping default light here toggle button is not any providers so default taking created context

const SecondContext = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Mode
      </Button>
    </>
  );
};

export default SecondContext;
