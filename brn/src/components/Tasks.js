import React from "react";
import "./css/task.css";

const assignedTasksColumns = [
  "#",
  "UID",
  "ID",
  "Type",
  "Title",
  "Requirements",
  "Issues",
  "Build to Store",
  "Deadline",
  "Max. File Size",
  "Status",
  "Points Earned",
];

const assignedTasksData = [
  {
    title: "Fonts - 1",
    status: "Review Pending",
  },
  {
    title: "Position: Static, Relative, Absolute, Fixed, Sticky",
    status: "Review Pending",
  },
  {
    title: "Rules of JSXML, React Build, What is Node_Modules, package.json",
    status: "Pending",
  },
  {
    title: "Control Statements -if, if else if, Switch Case",
    status: "Review Pending",
  },
  {
    title: "Get Values in React from Radio Button, CheckBox",
    status: "Pending",
  },
  {
    title: "Git - Branches",
    status: "Pending",
  },
  {
    title: "DBConnectivity Using NodeJS and to Client",
    status: "Review Pending",
  },
  {
    title: "Class Components, Life Cycle Methods",
    status: "Pending",
  },
  {
    title: "JSON Web Token (JWT), dotenv",
    status: "Pending",
  },
  {
    title: "Combine Reducer, Redux Thunk, Axios",
    status: "Pending",
  },
];

const AssignedTasksTable = () => {
  const today = new Date();
  const assignedTasksLength = assignedTasksData.length;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <table className="">
      <thead>
        <tr>
          {assignedTasksColumns.map((columnName) => (
            <th>{columnName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {assignedTasksData.map((task, index) => {
          const number = assignedTasksLength - index;
          const id = `${today.getFullYear()}${today.getMonth()}${today.getDate()}${number}`;
          const newDate = new Date(
            new Date().setDate(new Date().getDate() - index)
          );
          const pendingClassName =
            task.status === "Pending" ? "absentCell" : "review-pending";
          return (
            <tr>
              <td className={pendingClassName}>{number}</td>
              <td className={pendingClassName}>{`BPT${number}`}</td>
              <td className={pendingClassName}>{id}</td>
              <td className={pendingClassName}>
                {index % 2 === 0
                  ? "Technical Task - Theory ()"
                  : "Technical Task - Practice (UI and Code)"}
              </td>
              <td className={pendingClassName}>{task.title}</td>
              <td className={pendingClassName}>
                {index % 2 === 0
                  ? `Prepare for interviews on ${task.title}`
                  : "Create task as per requirement."}
              </td>
              <td className={pendingClassName}>
                <p>Open: 0</p>
                <p>Fixed: 0</p>
                <p>Closed: 0</p>
              </td>
              <td className={pendingClassName}>
                {index % 2 === 0 ? `NA` : "No"}
              </td>
              <td
                className={pendingClassName}
              >{`Before 11:30 AM on ${newDate.getDate()} ${
                months[newDate.getMonth()]
              } ${newDate.getFullYear()}`}</td>
              <td className={pendingClassName}>Not more than 40 MB</td>
              <td className={pendingClassName} style={{ color: "#5B9BD1" }}>
                {task.status}
              </td>
              <td className={pendingClassName}>0/100</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Tasks = () => {
  return (
    <div className="tasks-container">
      <h3 className="page-title">
        Tasks <small>Tasks assigned to you for completion and upload</small>
      </h3>
      <div className="breadcrumb">
        <i class="bi bi-house-fill"></i>
        <span className="px-1"></span> Home
        <i class="bi bi-chevron-right"></i> Tasks{" "}
        <i class="bi bi-chevron-right"></i>
      </div>
      <div className="attendance-details-container">
        <div className="attendance-accordian d-flex justify-content-between">
          <i className="bi bi-pencil-square" style={{ color: "#FFFFFF" }}>
            {" "}
            Tasks Assigned to You
          </i>
          <i
            class="bi bi-arrow-clockwise"
            style={{ color: "#FFFFFF" }}
            title="reload"
          ></i>
        </div>
        <div className=" p-3 d-flex justify-content-between flex-wrap">
          <label>
            <select>
              <option>5</option>
              <option>15</option>
              <option>25</option>
              <option>All</option>
            </select>{" "}
            records
          </label>
          <label className="d-flex flex-wrap">
            My Search: <input type="text" />
          </label>
        </div>
        <div className="px-3 assigned-tasks-table-container">
          <AssignedTasksTable />
          <div className="py-3">
            Showing 1 to {assignedTasksData.length} of{" "}
            {assignedTasksData.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
