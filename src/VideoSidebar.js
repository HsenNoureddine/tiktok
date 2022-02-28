import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function VideoSidebar({ likes, comments, shares }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button">
        {liked ? (
          <FavoriteIcon fontSize="large" onClick={() => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon fontSize="large" onClick={() => setLiked(true)} />
        )}
        <p>{liked ? +likes + 1 : likes}</p>
      </div>
      <div className="videoSidebar__button">
        <ChatIcon fontSize="large" />
        <p>{comments}</p>
      </div>
      <div className="videoSidebar__button">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
