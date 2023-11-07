import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="p-0 m-0 font-openSans">
          <Header></Header>
          <Outlet></Outlet>
    </div>
  );
}; 

export default Root;
