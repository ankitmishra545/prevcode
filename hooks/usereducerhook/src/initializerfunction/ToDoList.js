import React, { useReducer } from "react";

const createInitialState = (username) => {
  const initialTodos = [];
  for (let i = 0; i < 5; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1),
    });
  }
  return {
    draft: "",
    todos: initialTodos,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "change_draft": {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    }
    case "added_todo": {
      return {
        draft: "",
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
    default:
      throw Error("Unknown action:" + action.type);
  }
};

const ToDoList = ({ username }) => {
  // const [state, dispatch] = useReducer(reducer, username, createInitialState);
  const [state, dispatch] = useReducer(reducer, createInitialState(username)); // this type (passing intialstate directly, not passing intializer function ) less-efficeient because runs on every render, such as when we type in input
  return (
    <>
      <input
        placeholder="Add task"
        value={state.draft}
        onChange={(e) => {
          dispatch({
            type: "change_draft",
            nextDraft: e.target.value,
          });
        }}
      />
      <button onClick={() => dispatch({ type: "added_todo" })}>Add</button>
      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
