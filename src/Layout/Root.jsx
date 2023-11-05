import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="box-border p-0 m-0 overflow-hidden bg-secondary font-openSans">
          <Header></Header>
          <Outlet></Outlet>
    </div>
  );
}; 

export default Root;
