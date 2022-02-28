import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
function Video({ url, channel, description, song, likes, shares, comments }) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        src={url}
        loop
        className="video__player"
        ref={videoRef}
      ></video>
      {/* video footer */}
      <VideoFooter channel={channel} description={description} song={song} />
      {/* video sidebar */}
      <VideoSidebar likes={likes} shares={shares} comments={comments} />
    </div>
  );
}

export default Video;
