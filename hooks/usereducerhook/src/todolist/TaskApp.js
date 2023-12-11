import React, { useReducer, useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

let nextId = 3;

const DELETE = "delete";
const EDIT = "edit";
const ADD = "add";

const intitialState = [
  {
    id: 0,
    text: "First task",
    done: true,
  },
  {
    id: 1,
    text: "second task",
    done: false,
  },
  {
    id: 2,
    text: "third task",
    done: false,
  },
];

const taskReducer = (tasks, action) => {
  switch (action.type) {
    case ADD:
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    case DELETE:
      return tasks.filter((x) => x.id !== action.id);
    case EDIT:
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const TaskApp = () => {
  const [tasks, dispatch] = useReducer(taskReducer, intitialState);

  const handleAddTask = (text) => {
    dispatch({
      type: ADD,
      id: nextId++,
      text: text,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({ type: EDIT, task: task });
  };

  const handleDeleteTask = (taskID) => {
    dispatch({ type: DELETE, id: taskID });
  };

  return (
    <>
      <h1>Status of Tasks</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
};

export default TaskApp;
