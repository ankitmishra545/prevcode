import React, { useContext } from "react";
import { ThemeContext } from "./FifthContext";

const Button = ({ children, disabled, onClick }) => {
  const theme = useContext(ThemeContext);
  const className = "button-" + theme;
  return (
    <button disabled={!disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
