import logo from "../files/brn_logo.png";
import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center background-default">
      <div className="w-35">
        <span className="d-flex justify-content-center">
          <img src={logo} alt="BRN INFOTECH" className="logo" />
        </span>
        <div className="d-flex justify-content-center ">
          <div className="login-field-container">
            <h3 className="form-title">Sign Up</h3>
            <p className="field-label">
              Enter your name exactly as per your educational certificates.:
            </p>
            <div className="field">
              <input
                type="text"
                placeholder="Name as per certificates"
                className="col-12"
              />
            </div>
            <div className="field">
              <select className="col-12">
                {["Choose Gender", "Male", "Female"].map((option) => (
                  <option>{option}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <select className="col-12">
                {["Choose Marital Status", "Single", "Married"].map(
                  (option) => (
                    <option>{option}</option>
                  )
                )}
              </select>
            </div>
            <div className="field">
              <div
                style={{ width: "240px", minHeight: "240px", padding: "5px" }}
                className="bg-light d-flex justify-content-center align-items-center"
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "lightgray",
                    height: "210px",
                    width: "210px",
                    boxShadow: "1px 1px 30px",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "900",
                      textShadow: "1px 1px 3px",
                      fontSize: "24px",
                    }}
                  >
                    no image
                  </span>
                </div>
              </div>
              <label
                htmlFor="profile_pic"
                title="No file Chosen"
                className="file-upload my-2"
              >
                Select Image
              </label>
              <input
                id="profile_pic"
                name="profile_pic"
                type="file"
                accept="image/png"
                style={{ display: "none" }}
                className="col-12"
              />
            </div>
            <div className="field">
              <input
                type="number"
                placeholder="Mobile No."
                className="col-12"
              />
            </div>
            <div className="field">
              <input type="text" placeholder="City/Town" className="col-12" />
            </div>
            <div className="field">
              <select className="col-12">
                {[
                  "Choose Your State",
                  "Andhra Pradesh",
                  "Arunachal Pradesh",
                  "Assam",
                  "Bihar",
                  "Chhattisgarh",
                  "Goa",
                  "Gujarat",
                  "Haryana",
                  "Himachal Pradesh",
                  "Jharkhand",
                  "Karnataka",
                  "Madhya Pradesh",
                  "Maharashtra",
                  "Manipur",
                  "Meghalaya",
                  "Mizoram",
                  "Nagaland",
                  "Odisha",
                  "Punjab",
                  "Rajasthan",
                  "Sikkim",
                  "Tamil Nadu",
                  "Telangana",
                  "Tripura",
                  "Uttar Pradesh",
                  "Uttarakhand",
                  "West Bengal",
                  "Andaman and Nicobar Islands",
                  "Chandigarh",
                  "Dadra & Nagar Haveli and Daman & Diu",
                  "Delhi",
                  "Jammu and Kashmir",
                  "Lakshadweep",
                  "Puducherry",
                  "Ladakh",
                ].map((state) => (
                  <option>{state}</option>
                ))}
              </select>
            </div>
            <p className="field-label">Enter your account details below:</p>
            <div className="field">
              <input type="email" placeholder="Email" className="col-12" />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Password"
                className="col-12"
              />
            </div>
            <div className="field">
              <input
                type="password"
                placeholder="Re-type Password"
                className="col-12"
              />
            </div>
            <div>
              <label>
                <input type="checkbox" className="me-2" />I agree to the{" "}
                <span className="forgot-password-link">
                  Terms of Service & Privacy Policy
                </span>
              </label>
            </div>
            <div className="py-3 d-flex justify-content-between">
              <Link to="/logIn" className="back-button">
                Back
              </Link>
              <button className="log-in-button">Submit</button>
            </div>
          </div>
        </div>
        <p className="text-center" style={{ color: "#7A8CA5" }}>
          2023 <AiOutlineCopyrightCircle /> BRN Infotech Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
