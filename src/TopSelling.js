import React from "react";
import ETFSlider from "./ETFSlider";
import "swiper/css";

function TopSelling() {
  return (
    <div>
      <div style={{ marginTop: "7%" }}>
        <div
          style={{
            fontWeight: "600",
            fontSize: "18px",
            color: "#101010",
            float: "left",
          }}
        >
          Top Selling
        </div>
        <div
          style={{
            float: "right",
            fontWeight: "400",
            fontSize: "16px",
            color: "#939191",
          }}
        >
          See all
        </div>
      </div>
      <br />
      <ETFSlider />
    </div>
  );
}

export default TopSelling;
