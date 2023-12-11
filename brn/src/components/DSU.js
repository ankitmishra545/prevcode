import React from "react";
import "./css/dsu.css";

const formDetails = [
  "Morning 9:00-10:00 AM",
  "Morning 10:00-11:00 AM",
  "Morning 11:00-12:00 PM",
  "Afternoon 12:00-1:00 PM",
  "Afternoon 1:00-2:00 PM",
  "Afternoon 2:00-3:00 PM",
  "Afternoon 3:00-4:00 PM",
  "Evening 4:00-5:00 PM",
  "Evening 5:00-6:00 PM",
  "Evening 6:00- Till you leave Office",
];

const FormDiv = ({ detail }) => {
  return (
    <div className="form-div d-flex flex-wrap">
      <label>{detail}</label>
      <div>
        <input
          type="text"
          placeholder={`Write activities worked between ${detail}`}
        />
      </div>
    </div>
  );
};

const DSU = () => {
  return (
    <div className="daily-status-update-container">
      <h3 className="page-title">
        {" "}
        Daily Status Update <span className="px-1"> </span>
        <small>Write your today's Status Update</small>
      </h3>
      <div className="breadcrumb">
        <i class="bi bi-house-fill"></i>
        <span className="px-1"></span> Home <span></span>
        <i class="bi bi-chevron-right"></i> Daily Status Update{" "}
        <i class="bi bi-chevron-right"></i>
      </div>
      <div className="activity-form-container">
        <div className="activity-form-header">
          <i className="bi bi-gift" style={{ color: "#FFFFFF" }}>
            {" "}
            Today's Activities Details
          </i>
        </div>
        <div>
          {formDetails.map((detail) => (
            <FormDiv detail={detail} />
          ))}
          <div className="activity-details-footer">
            <button>Update Today's Status</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSU;
