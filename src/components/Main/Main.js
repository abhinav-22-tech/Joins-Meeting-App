import React, { useState } from "react";
import "./Main.css";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import ChatRoom from "../ChatRoom/ChatRoom";

function Main(props) {
  const [displayChat, setDisplayChat] = useState("notDisplayChat");

  const displayChatRoom = () => {
    if (displayChat === "notDisplayChat") setDisplayChat("displayChat");
    else if (displayChat === "displayChat") setDisplayChat("notDisplayChat");
  };

  return (
    <div className="msg_container">
      <div className="messageIcon">
        <IconButton onClick={displayChatRoom} aria-label="" component="span">
          <MessageIcon />
        </IconButton>
      </div>
      <div className={displayChat}>
        <ChatRoom roomId={props.match.params} />
      </div>
    </div>
  );
}

export default Main;
