import React, { useState } from "react";
import "./Main.css";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import ChatRoom from "../ChatRoom/ChatRoom";
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import IosShareIcon from "@mui/icons-material/IosShare";

function Main(props) {
  const [displayChat, setDisplayChat] = useState("notDisplayChat");

  const displayChatRoom = () => {
    if (displayChat === "notDisplayChat") setDisplayChat("displayChat");
    else if (displayChat === "displayChat") setDisplayChat("notDisplayChat");
  };

  return (
    <div className="main">
      <div className="messageIcon">
        <div>
          <IconButton>
            <MicIcon />
          </IconButton>
          <IconButton>
            <VideocamIcon />
          </IconButton>
          <IconButton>
            <IosShareIcon />
          </IconButton>
          <IconButton onClick={displayChatRoom} aria-label="" component="span">
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
