import React from "react";
import "./style_home.css";

/* Import */
import Aside from "../Components/Aside";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="home grid">
      <Aside />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
