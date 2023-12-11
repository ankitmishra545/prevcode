import React from "react";
import logo from "../files/brn_logo.png";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="d-flex justify-content-center background-default col-12">
      <div>
        <span className="d-flex justify-content-center">
          <img src={logo} alt="BRN INFOTECH" className="logo" />
        </span>
        <div className="login-field-container col-12 ">
          <h3 className="form-title">Sign In</h3>
          <form>
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
            <div className="d-flex flex-wrap justify-content-between col-12">
              <button className="log-in-button col-6 col-md-5">Login</button>
              <label className="p-2 col-6 col-md-7 field-label">
                <input type="checkbox" className="me-1" />
                Remember
              </label>
              <span className="forgot-password-link mt-2 col-6 col-md-5">
                Forgot Password?
              </span>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center align-items-center create-account-link">
          <Link to="/signUp" className="create-account-link-text">
            CREATE AN ACCOUNT
          </Link>
        </div>
        <p className="text-center" style={{ color: "#7A8CA5" }}>
          2023 <AiOutlineCopyrightCircle /> BRN Infotech Pvt. Ltd.
        </p>
      </div>
    </div>
  );
};

export default Login;
