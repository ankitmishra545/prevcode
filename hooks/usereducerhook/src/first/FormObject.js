import React, { useReducer } from "react";

const initialState = {
  age: 30,
  name: "",
};

const NAME_CHANGED = "nameChanged";
const INCREMENT_AGE = "incrementAge";

const reducer = (currentState = initialState, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return { ...currentState, name: action.value };
    case INCREMENT_AGE:
      return { ...currentState, age: currentState.age + 1 };
  }
};

const FormObject = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <input
        value={state.name}
        onChange={(e) =>
          dispatch({ type: NAME_CHANGED, value: e.target.value })
        }
      />
      <button onClick={(e) => dispatch({ type: INCREMENT_AGE })}>Age++</button>
      <h3>
        Hello, {state.name}. You are {state.age}{" "}
      </h3>
    </>
  );
};

export default FormObject;
