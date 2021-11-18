import React, { useState } from "react";
import "./Main.css";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import ChatRoom from "../ChatRoom/ChatRoom";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import IosShareIcon from "@mui/icons-material/IosShare";
import CallEndIcon from "@mui/icons-material/CallEnd";

function Main(props) {
  const [displayChat, setDisplayChat] = useState("notDisplayChat");
  const [micIcon, setMicIcon] = useState("micoffIcon");

  const displayChatRoom = () => {
    if (displayChat === "notDisplayChat") setDisplayChat("displayChat");
    else if (displayChat === "displayChat") setDisplayChat("notDisplayChat");
  };

  const switchAudio = () => {
         if(MicIcon === "MicOffIcon") setMicIcon("MicIcon");
         else if (MicIcon === "MicIcon") setMicIcon("MicoffIcon")
  };

  return (
    <div className="main">
      <div className="messageIcon">
        <div className="icons">
          <IconButton
            onClick={switchAudio}
            type="button"
            id="mic"
            style={{ color: "white", backgroundColor: "#5F676A" }}
          >
            <MicIcon />
          </IconButton>
          <IconButton
            onClick={switchAudio}
            type="button"
            id="mic"
            style={{ color: "white", backgroundColor: "#5F676A" }}
          >
            <MicOffIcon />
          </IconButton>
          <IconButton
            id="video"
            style={{ color: "white", backgroundColor: "#5F676A" }}
          >
            <VideocamIcon />
          </IconButton>
          <IconButton
            id="callend"
            style={{ color: "red", backgroundColor: "#5F676A" }}
          >
            <CallEndIcon />
          </IconButton>
          <IconButton
            id="screenshare"
            style={{ color: "white", backgroundColor: "#5F676A" }}
          >
            <IosShareIcon />
          </IconButton>
          <IconButton
            onClick={displayChatRoom}
            aria-label=""
            component="span"
            style={{ color: "white", backgroundColor: "#5F676A" }}
          >
            <MessageIcon />
          </IconButton>
        </div>
      </div>
      <div className="chatRoom">
        <div className={displayChat}>
          <ChatRoom roomId={props.match.params.roomId} />
        </div>
      </div>
    </div>
  );
}

export default Main;