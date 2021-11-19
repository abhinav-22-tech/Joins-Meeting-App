import React, { useState } from "react";
import "./Main.css";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import ChatRoom from "../ChatRoom/ChatRoom";
import Video from "../Video/Video";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import IosShareIcon from "@mui/icons-material/IosShare";
import CallEndIcon from "@mui/icons-material/CallEnd";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import PausePresentationIcon from "@mui/icons-material/PausePresentation";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";

function Main(props) {
  const [displayChat, setDisplayChat] = useState("notDisplayChat");
  const [mic, setMic] = useState("micOffClassIcon");
  const [micOff, setMicOff] = useState("");
  const [vid, setVid] = useState("vidOffClassIcon");
  const [vidOff, setVidOff] = useState("");
  const [share, setShare] = useState("shareOffClassIcon");
  const [shareOff, setShareOff] = useState("");
  const [date, setDate] = useState(new Date());

  const displayChatRoom = () => {
    if (displayChat === "notDisplayChat") setDisplayChat("displayChat");
    else if (displayChat === "displayChat") setDisplayChat("notDisplayChat");
  };

  const switchAudio = () => {
    if (mic !== "") setMic("");
    else if (mic === "") setMic("micOffClassIcon");
  };

  const switchVideo = () => {
    if (vid !== "") setVid("");
    else if (vid === "") setVid("vidOffClassIcon");
  };

  const switchShare = () => {
    if (share !== "") setShare("");
    else if (share === "") setShare("shareOffClassIcon");
  };

  return (
    <div className="main">
      {/* <div id="video-grid"></div> */}
      {/* <Video /> */}
      <div className="messageIcon">
        <div className="icons">
          <div className="mic">
            <IconButton
              onClick={switchAudio}
              type="button"
              style={{ color: "white", backgroundColor: "#5F676A" }}
            >
              <MicIcon className={mic} />
              <MicOffIcon className={mic === "" ? "micOffClassIcon" : ""} />
            </IconButton>
          </div>
          <div className="vid">
            <IconButton
              onClick={switchVideo}
              type="button"
              style={{ color: "white", backgroundColor: "#5F676A" }}
            >
              <VideocamIcon className={vid} />
              <VideocamOffIcon
                className={vid === "" ? "vidOffClassIcon" : ""}
              />
            </IconButton>
          </div>

          <IconButton style={{ color: "red", backgroundColor: "#5F676A" }}>
            <CallEndIcon />
          </IconButton>

          <IconButton style={{ color: "#fff", backgroundColor: "#5F676A" }}>
            <ClosedCaptionIcon />
          </IconButton>

          <div className="share">
            <IconButton
              onClick={switchShare}
              type="button"
              style={{ color: "white", backgroundColor: "#5F676A" }}
            >
              <IosShareIcon
                className={share === "" ? "shareOffClassIcon" : ""}
              />
              <PausePresentationIcon className={share} />
            </IconButton>
          </div>
          <IconButton
            onClick={displayChatRoom}
            aria-label=""
            component="span"
            style={{ color: "white", backgroundColor: "#5F676A" }}
          >
            <MessageIcon />
          </IconButton>
        </div>
        <span className="time">
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          •{" "}
          {date.toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span>{props.match.params.roomId}</span>
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
