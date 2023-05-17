import React from "react";
import Navbar from "./Navbar";
import TopSelling from "./TopSelling";

function Home() {
  return (
    <div>
      <Navbar />
      <TopSelling />
      <div style={{ marginTop: "7%" }}>
        <div
          style={{
            fontWeight: "600",
            fontSize: "18px",
            color: "#101010",
            float: "left",
            marginLeft: "4%",
          }}
        >
          Top Artist
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
    </div>
  );
}

export default Home;
