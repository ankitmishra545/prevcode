import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const Footer = () => {
  return (
    <footer>
      <Button>Settings</Button>
    </footer>
  );
};

const Button = ({ children }) => {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return <button className={className}>{children}</button>;
};

const Panel = ({ children, title }) => {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign Up</Button>
      <Button>Log In</Button>
      <hr />
      <ThemeContext.Provider value="dark">
        <Footer />
      </ThemeContext.Provider>
    </Panel>
  );
};

const SeventhContext = () => {
  return (
    <ThemeContext.Provider value="light">
      <Form />
    </ThemeContext.Provider>
  );
};

export default SeventhContext;
