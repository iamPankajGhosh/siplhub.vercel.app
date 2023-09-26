import React from "react";
import { useNavigate } from "react-router-dom";

import "./VideoPlayer.css";

export default function VideoPlayer({ src }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="video-player">
        <div className="container">
          <div className="wrapper">
            <button
              className="operator back-btn"
              onClick={() => navigate("/home")}
            >
              <ion-icon name="arrow-back-outline"></ion-icon>
            </button>

            <button
              className="operator close-btn"
              onClick={() => navigate("/home")}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>

          <video
            src={src}
            autoPlay
            loop
            controls
            muted
            className="video"
          ></video>
        </div>
      </div>
    </>
  );
}
