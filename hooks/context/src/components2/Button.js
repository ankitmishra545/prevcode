import React, { useContext } from "react";
import { ThemeContext } from "./SecondContext";

const Button = ({ children, onClick }) => {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
