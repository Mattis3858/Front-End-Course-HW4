import React from "react";
import "./css/Home.css";
import { BsFillBellFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

function Navbar() {
  return (
    <div>
      <div style={{ float: "left", display: "flex", marginTop: "8%" }}>
        <img src="images/man.png" className="user" alt="" />
        <div>
          <div>Welcome back</div>
          <div>Stephen Yeh</div>
        </div>
        <BsFillBellFill />
      </div>
      <SlMagnifier />
      <input placeholder="Search Artwork" />
    </div>
  );
}

export default Navbar;
