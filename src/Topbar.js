import React from "react";
import "./css/Topbar.css";
import { BsBatteryFull } from "react-icons/bs";
import { AiOutlineWifi, AiFillSignal } from "react-icons/ai";

function Topbar() {
  let today = new Date();
  let time = today.getHours() + ":" + today.getMinutes();
  return (
    <div className="topbar">
      <div className="topbar-left">{time}</div>
      <div className="topbar-right">
        <AiFillSignal className="topbar" />
        <AiOutlineWifi className="topbar" />
        <BsBatteryFull className="topbar" />
      </div>
    </div>
  );
}

export default Topbar;
