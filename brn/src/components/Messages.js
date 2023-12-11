import React from "react";

const messageTableColumns = ["#", "Category", "Subject", "Delivered On"];

const MessagesTable = () => {
  return (
    <table className="message-table">
      <thead>
        <tr>
          {messageTableColumns.map((column) => {
            return <th>{column}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            colSpan="4"
            style={{ textAlign: "center", background: "#F7F7F7" }}
          >
            No Data Available
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const Messages = () => {
  return (
    <div className="message-page-container">
      <h3 className="page-title">
        {" "}
        Messages <span className="px-1"> </span>
        <small>Messages sent to you</small>
      </h3>
      <div className="breadcrumb">
        <i class="bi bi-house-fill"></i>
        <span className="px-1"></span> Home <span></span>
        <i class="bi bi-chevron-right"></i> Daily Status Update{" "}
        <i class="bi bi-chevron-right"></i>
      </div>
      <div className="attendance-details-container">
        <div className="attendance-accordian d-flex justify-content-between">
          <i className="bi bi-pencil-square" style={{ color: "#FFFFFF" }}>
            {" "}
            Your Messages
          </i>
        </div>
        <div className=" p-3 d-flex justify-content-between">
          <label>
            <select>
              <option>5</option>
              <option>15</option>
              <option>25</option>
              <option>All</option>
            </select>{" "}
            records
          </label>
          <label>
            My Search: <input type="text" />
          </label>
        </div>
        <div className="px-3">
          <MessagesTable />
          <div className="pt-2">Showing 0 to 0 of 0 entries</div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
