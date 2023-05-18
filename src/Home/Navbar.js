import React from "react";
import "../css/Home.css";
import { BsFillBellFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";

function Navbar() {
  return (
    <div>
      <div
        style={{
          float: "left",
          display: "flex",
          marginTop: "8%",
          marginLeft: "4%",
          display: "inline-block",
        }}
      >
        <img src="images/man.png" className="user" alt="" />
        <div>
          <div>Welcome back</div>
          <div>Stephen Yeh</div>
        </div>
        <BsFillBellFill />
      </div>

      <SlMagnifier style={{ marginLeft: "4%", marginTop: "4%" }} />
      <input placeholder="Search Artwork" style={{ marginLeft: "1%" }} />
    </div>
  );
}

export default Navbar;
