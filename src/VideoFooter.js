import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import Ticker from "react-ticker";
function VideoFooter({channel, description, song}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__Text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__Ticker">
          <MusicNoteIcon className="videoFooter__Icon" />
          <Ticker mode="smooth">
            {({}) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__Record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt = ""
      />
    </div>
  );
}

export default VideoFooter;
