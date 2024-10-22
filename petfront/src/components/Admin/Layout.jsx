import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

const Layout = () => {

  return (
    <div className="Layout">
      <Sidebar />
      <div className="LayoutConents">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
