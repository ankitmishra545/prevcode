import React, { useContext } from "react";
import { ThemeContext } from "./FirstContext";

const Panel = ({ title, children }) => {
  const theme = useContext(ThemeContext);
  const className = "panel-" + theme;
  return (
    <section className={className} style={{ width: "170px" }}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
