import React from "react";

function ETFCard({ src, name, price, creator }) {
  return (
    <div style={{ width: "70%", margin: "auto" }}>
      <img src={src} alt="1" width="263px" />
      <div>
        <div style={{ marginTop: "2vh" }}>
          <div style={{ float: "left" }}>{name}</div>
          <div style={{ float: "right" }}>{`${price} ETH`}</div>
        </div>
        <br />
        <div style={{ marginTop: "2vh" }}>
          <div style={{ float: "left", display: "flex" }}>
            <img src="images/man.png" width="40px" height="40px" alt="" />
            <div style={{ marginLeft: "0.5vh" }}>
              {creator}
              <div style={{ fontWeight: "400", color: "#939191" }}>Creator</div>
            </div>
          </div>
          <button
            type="button"
            style={{
              float: "right",
              width: "25vw",
              height: "4.5vh",
              background: "#0047FF",
              color: "white",
              borderRadius: "20px",
              fontWeight: "400",
              border: "none",
            }}
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  );
}

export default ETFCard;
