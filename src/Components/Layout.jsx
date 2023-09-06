import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex gap-5">
        <SideBar/>
        <Outlet/>
      </div>

      
    </>
  );
};

export default Layout;
