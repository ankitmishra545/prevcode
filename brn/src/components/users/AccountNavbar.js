import React, { useEffect, useRef, useState } from "react";
import "../css/account.css";
import { AiOutlineDown, AiOutlineKey } from "react-icons/ai";
import logo2 from "../../files/small_logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavLinks = () => {
  const navigate = useNavigate();
  const moreItemsRef = useRef();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const handleMoreOption = (e) => {
    e.stopPropagation();
    setIsMoreOpen(!isMoreOpen);
  };

  const navigateToPage = (link) => {
    navigate(link);
  };

  function clickEvent(e) {
    if (
      e.target.className !== "more-list-container open" ||
      "bi bi-chevron-down"
    ) {
      setIsMoreOpen(!isMoreOpen);
    }
  }

  useEffect(() => {
    window.addEventListener("click", clickEvent);
    return () => window.removeEventListener("click", clickEvent);
  });

  return (
    <ul className="navlinks-list">
      <li>
        <NavLink to="/Home">Home</NavLink>
      </li>
      <li>
        <NavLink to="/DailyStatusUpdate">Daily Status Update</NavLink>
      </li>
      <li>
        <NavLink to="/Tasks">Tasks</NavLink>
      </li>
      <li>
        <NavLink to="/Messages">Messages</NavLink>
      </li>
      <li
        onClick={handleMoreOption}
        style={{ background: `${isMoreOpen ? "#FFF" : ""}` }}
        className={`more-list-container ${isMoreOpen ? "open" : ""}`}
        ref={moreItemsRef}
      >
        More{" "}
        <i
          // onClick={handleMoreOption}
          class="bi bi-chevron-down"
        ></i>
        {isMoreOpen && (
          <ul>
            <li onClick={() => navigateToPage("/NewRequest")}>
              Create a Request
            </li>
            <li onClick={() => navigateToPage("/NewLeave")}>Apply Leave</li>
            <li onClick={() => navigateToPage("")}>Curriculum</li>
          </ul>
        )}
      </li>
    </ul>
  );
};

const AccountNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const logOutUser = () => {
    navigate("/login");
  };

  return (
    <div className="header">
      <nav>
        <div className="navbar-left-container">
          <Link to="/Home">
            <img
              src={logo2}
              alt="BRN Infotech"
              className="brn-home-page-logo"
            />
          </Link>
          <div className="navbarLists">
            <NavLinks />
          </div>
        </div>
        <div className="navbaar-right-container">
          <div className="profile ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/MS_Dhoni_2016.jpg/800px-MS_Dhoni_2016.jpg"
              alt="MS Dhoni"
            />{" "}
            <span className="d-none d-sm-inline-block">
              MS Dhoni <AiOutlineDown />
            </span>
            <div className="logout-handle-container" onClick={logOutUser}>
              <AiOutlineKey />
              <span>Log Out</span>
            </div>
          </div>
          <div className="menu" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div
        className={
          !isOpen
            ? "outer-navlinks-container close"
            : "outer-navlinks-container open"
        }
      >
        <NavLinks />
      </div>
    </div>
  );
};

export default AccountNavbar;
