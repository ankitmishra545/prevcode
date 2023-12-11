import React from "react";
import AccountNavbar from "./AccountNavbar";
import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <div>
      <AccountNavbar />
      <Outlet className="outlet" />
    </div>
  );
};

export default AccountLayout;
