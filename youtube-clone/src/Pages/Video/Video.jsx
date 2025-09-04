import React from "react";
import "./Video.css"; // Assuming you have a CSS file for styling
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";

const Video = () => {
  return (
    <div className="play-container">
        <PlayVideo />
        <Recommended />
    </div>
  );
}

export default Video;