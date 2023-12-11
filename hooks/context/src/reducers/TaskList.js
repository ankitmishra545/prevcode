import React from "react";
import { useTasks } from "./TasksContext";
import Task from "./Task";

const TaskList = () => {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            <Task task={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
