import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function Profile() {
  return (
    <div style={{ fontFamily: "Poppins ,sans-serif" }}>
      <div className="user-info">
        <div style={{ position: "absolute", top: "0" }}>
          <div className="user-background">
            <img
              src="images/Profile/user-background.png"
              style={{
                width: "100vw",
              }}
            />
          </div>
          <div
            className="user-image"
            style={{
              border: "solid",
              borderRadius: "50%",
              borderColor: "#00D2FF",
              width: "20vw",
              position: "relative ",
              margin: "0 auto",
              marginTop: "-13%",
            }}
          >
            <img
              src="images/man.png"
              alt="user-image"
              style={{
                width: "20vw",
                borderColor: "blue",
              }}
            />
          </div>
        </div>
        <div style={{ position: "absolute", marginTop: "73%", width: "100%" }}>
          <div
            className="user-name"
            style={{ position: "relative", margin: "0 auto" }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "1.5rem",
              }}
            >
              Ahmed Shah
            </div>
          </div>
          <div
            className="content-detail"
            style={{
              display: "flex",
              width: "100%",
              position: "relative",
              margin: "0 auto",
              marginTop: "6%",
              justifyContent: "space-around",
            }}
          >
            <div className="items" style={{ marginRight: "-15%" }}>
              <div
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                245
              </div>
              <div style={{ fontSize: "1rem" }}>Items</div>
            </div>
            <hr />
            <div
              className="followers"
              style={{ marginLeft: "-15%", marginRight: "-15%" }}
            >
              <div
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                12.4 K
              </div>
              <div>Followers</div>
            </div>
            <hr />
            <div className="likes" style={{ marginLeft: "-15%" }}>
              <div
                style={{
                  fontWeight: "500",
                  textAlign: "center",
                  fontSize: "1.2rem",
                }}
              >
                10.3 K
              </div>
              <div style={{ textAlign: "center" }}>Likes</div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="community-action"
        style={{
          width: "100%",
          display: "flex",
          position: "absolute",
          margin: "0 auto",
          top: "55%",
          alignItems: "center",
        }}
      >
        <button
          className="follow-button"
          style={{
            position: "relative",
            width: "16rem",
            height: "3.2rem",
            border: "1px solid #0047FF",
            borderRadius: "4rem",
            margin: "0 auto",
            marginTop: "0",
            backgroundColor: "#0047FF",
          }}
        >
          <div style={{ lineHeight: "0px", fontSize: "1rem", color: "white" }}>
            Follow
          </div>
        </button>

        <button
          className="email-button"
          style={{
            position: "relative",
            width: "5rem",
            height: "3.2rem",
            border: "1px solid #0047FF",
            borderRadius: "4rem",
            margin: "0 auto",
            backgroundColor: "white",
          }}
        >
          <AiOutlineMail
            style={{ lineHeight: "0px", fontSize: "1.8rem", color: " #0047FF" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Profile;
