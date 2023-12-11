import React, { useContext, useState } from "react";
import { CurrentUserContext } from "./FourthContext";
import Button from "./Button";

const LoginForm = () => {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const canLogin = firstName !== "" && lastName !== "";
  // console.log(firstName !== "" && lastName !== "");
  return (
    <>
      <label>
        First Name{":"}
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name{":"}
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <Button
        disabled={canLogin}
        onClick={() => {
          setCurrentUser({ name: firstName + " " + lastName });
        }}
      >
        Log In
      </Button>
      {!canLogin && <i>Fill in both fields.</i>}
    </>
  );
};

export default LoginForm;
