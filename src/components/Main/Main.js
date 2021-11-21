import React, { useState, useRef } from "react";
// import ReactFullscreen from "react-easyfullscreen";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "./Main.css";
import MessageIcon from "@mui/icons-material/Message";
import { IconButton } from "@mui/material";
import ChatRoom from "../ChatRoom/ChatRoom";
// import Video from "../Video/Video";

import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import IosShareIcon from "@mui/icons-material/IosShare";
import CallEndIcon from "@mui/icons-material/CallEnd";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import PausePresentationIcon from "@mui/icons-material/PausePresentation";
import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
import { bgcolor, style } from "@mui/system";
// import { style } from "@mui/system";
// import { Fullscreen } from "@mui/icons-material";

function Main(props) {
  const [displayChat, setDisplayChat] = useState("notDisplayChat");
  const [mic, setMic] = useState("micOffClassIcon");
  const [micOff, setMicOff] = useState("");
  const [vid, setVid] = useState("vidOffClassIcon");
  const [vidOff, setVidOff] = useState("");
  const [share, setShare] = useState("shareOffClassIcon");
  const [shareOff, setShareOff] = useState("");
  const [date, setDate] = useState(new Date());
  const [fullScreenMode, setfullScreenMode] = useState(false);
  const [style, setStyle] = useState("cont");

  const displayChatRoom = () => {
    if (displayChat === "notDisplayChat") setDisplayChat("displayChat");
    else if (displayChat === "displayChat") setDisplayChat("notDisplayChat");
  };

  const switchAudio = () => {
    if (mic !== "") setMic("");
    else if (mic === "") setMic("micOffClassIcon");
  };

  const changeStyle = () => {
    setStyle("cont2");
  };

  const switchVideo = () => {
    if (vid !== "") setVid("");
    else if (vid === "") setVid("vidOffClassIcon");
  };

  const switchShare = () => {
    if (share !== "") setShare("");
    else if (share === "") setShare("shareOffClassIcon");
  };

  const handle = useFullScreenHandle();

  const fullScreenToggler = () => {
    if (fullScreenMode) {
      setfullScreenMode(false);
      handle.exit();
    } else {
      setfullScreenMode(true);
      handle.enter();
    }
  };

  return (
    <FullScreen handle={handle}>
      <div className="main">
        {/* <div id="video-grid"></div> */}
        {/* <Video /> */}
        <div className="meetIcon">
          <div className="icons">
            <div className="mic" onClick={changeStyle}>
              <IconButton
                onClick={switchAudio}
                type="button"
                // style={{ color: "white", backgroundColor: "#5F676A" }}
              >
                <MicIcon
                  id="cont"
                  className={mic}
                  // style={{ color: "white", backgroundColor: "#5F676A" }}
                />
                <MicOffIcon
                  id="cont1"
                  className={mic === "" ? "micOffClassIcon" : ""}
                  // style={{ color: "white", backgroundColor: "red" }}
                />
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

            <IconButton
              onClick={fullScreenToggler}
              style={{ color: "red", backgroundColor: "#5F676A" }}
            >
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
          <span className="roomid">{props.match.params.roomId}</span>
        </div>
        <div className="chatRoom">
          <div className={displayChat}>
            <ChatRoom roomId={props.match.params.roomId} />
          </div>
        </div>
        <div className="messageicon">
          <div className="msg">
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
      </div>
    </FullScreen>
  );
}

export default Main;
