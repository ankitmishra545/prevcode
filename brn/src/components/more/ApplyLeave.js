import React from "react";

const ApplyLeave = () => {
  return (
    <div className="create-request-page">
      <h3 className="page-title">
        Apply For Leave
        <span className="px-1" />
        <small>Choose Leave type, dates and describe</small>
      </h3>
      <div className="breadcrumb">
        <i class="bi bi-house-fill"></i>
        <span className="px-1"></span> Home
        <i class="bi bi-chevron-right"></i> Apply Leave{" "}
        <i class="bi bi-chevron-right"></i>
      </div>
      <div className="activity-form-container">
        <div className="activity-form-header">
          <i className="bi bi-gift" style={{ color: "#FFFFFF" }}>
            {" "}
            Leave Details
          </i>
        </div>
        <div>
          <div className="form-group">
            <label>
              Leave Type <span>*</span>
            </label>
            <div>
              <select>
                <option>Select...</option>
              </select>
              <div>
                <b>Casual Leave:</b> For attending any planned activity.
                <br />
                <b>Sick Leave:</b> For not feeling well, Unable to come to
                office.
                <br />
                <b>Emergency Leave:</b> For any Urgencies/emergencies.
                <br />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>
              Leave Date(s) <span>*</span>
            </label>
            <div>
              <input type="date" />
              <span
                style={{
                  background: "#E5E5E5",
                  padding: "10px",
                  fontSize: "1.2rem",
                }}
              >
                till
              </span>
              <input type="date" />
              <div>
                Total Number of Leaves:
                <br />
                <b>Leaves Taken:</b> 0 | <b>Max. Leaves:</b> 4 |{" "}
                <b>Leaves Available:</b> 4
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>
              Seat Number <span>*</span>
            </label>
            <div>
              <select>
                <option>Select...</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>
              Description<span>*</span>
            </label>
            <div>
              <textarea placeholder="Leave Description"></textarea>
              <p style={{ opacity: "0.7" }}>
                Please describe the reason why are you taking leave{" "}
              </p>
            </div>
          </div>
          <div className="request-footer">
            <button>Apply Leave(s)</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
