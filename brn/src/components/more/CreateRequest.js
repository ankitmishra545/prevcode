import React from "react";

const CreateRequest = () => {
  return (
    <div className="create-request-page">
      <h3 className="page-title">
        Create Request
        <span className="px-1" />
        <small>Choose Request type, and describe</small>
      </h3>
      <div className="breadcrumb">
        <i class="bi bi-house-fill"></i>
        <span className="px-1"></span> Home
        <i class="bi bi-chevron-right"></i> Create Request{" "}
        <i class="bi bi-chevron-right"></i>
      </div>
      <div className="activity-form-container">
        <div className="activity-form-header">
          <i className="bi bi-gift" style={{ color: "#FFFFFF" }}>
            {" "}
            Create a Request
          </i>
        </div>
        <div>
          <div className="form-group">
            <label>
              Request Type <span>*</span>
            </label>
            <div>
              <select>
                <option>Select...</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>
              Lab ID <span>*</span>
            </label>
            <div>
              <select>
                <option>Select...</option>
              </select>
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
              <textarea placeholder="Ticket Description"></textarea>
              <p style={{ opacity: "0.7" }}>Please describe in detail</p>
            </div>
          </div>
          <div className="activity-details-footer">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRequest;
