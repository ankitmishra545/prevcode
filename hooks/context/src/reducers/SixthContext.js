import React from "react";
import { TasksProvider } from "./TasksContext";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const SixthContext = () => {
  return (
    <TasksProvider>
      <h1>Welcome</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
};

export default SixthContext;
