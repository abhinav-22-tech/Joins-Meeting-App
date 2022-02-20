import React from "react";
import { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MessageIcon from "@mui/icons-material/Message";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PanToolIcon from "@mui/icons-material/PanTool";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function MenuBar({
  handleLogout,
  handleAudioMute,
  handleAudioUnmute,
  handleVideoMute,
  handleVideoUnmute,
  showChat,
  roomName,
}) {
  const [audio, setAudio] = useState(true);
  const [camera, setCamera] = useState(true);
  const [message, setMessage] = useState(true);
  const [raiseHand, setRaiseHand] = useState(false);

  const audioToggle = () => {
    if (audio === false) {
      setAudio(true);
      handleAudioUnmute();
    } else if (audio === true) {
      setAudio(false);
      handleAudioMute();
    }
  };

  const cameraToggle = () => {
    if (camera === false) {
      setCamera(true);
      handleVideoUnmute();
    } else if (camera === true) {
      setCamera(false);
      handleVideoMute();
    }
  };

  const messageToggle = () => {
    if (message === false) {
      setMessage(true);
      showChat();
    } else if (message === true) {
      setMessage(false);
      showChat();
    }
  };

  const raiseHandToggle = () => {
    if (raiseHand === false) {
      setRaiseHand(true);
      // handleVideoUnmute();
    } else if (raiseHand === true) {
      setRaiseHand(false);
      // handleVideoMute();
    }
  };

  return (
    <Box>
      <Box
        component="span"
        sx={{
          backgroundColor: "#141414",
          m: "auto",
          p: 2,
          borderRadius: 3,
          boxShadow: 24,
        }}
        display="flex"
        width={500}
        alignItems="center"
        justifyContent="center"
      >
        <Button onClick={audioToggle} sx={{ color: "white" }}>
          {audio === true ? (
            <MicIcon sx={{ color: "#00a389" }} />
          ) : (
            <MicOffIcon sx={{ color: "white" }} />
          )}
        </Button>
        <Button onClick={cameraToggle} sx={{ color: "white" }}>
          {camera === true ? (
            <VideocamIcon sx={{ color: "#00a389" }} />
          ) : (
            <VideocamOffIcon sx={{ color: "white" }} />
          )}
        </Button>
        <Button onClick={messageToggle} sx={{ color: "white" }}>
          {message === true ? (
            <MessageIcon sx={{ color: "#00a389" }} />
          ) : (
            <ChatBubbleOutlineIcon sx={{ color: "white" }} />
          )}
        </Button>
        <Button onClick={raiseHandToggle} sx={{ color: "white" }}>
          {raiseHand === true ? (
            <PanToolIcon sx={{ color: "green" }} />
          ) : (
            <PanToolIcon sx={{ color: "white" }} />
          )}
        </Button>
        {/* <Button sx={{ color: "white" }}>
          <PeopleAltIcon />
        </Button> */}
        <Button sx={{ color: "white" }}>
          <PersonAddAlt1Icon />
        </Button>
        <Button sx={{ color: "white" }}>
          <MoreHorizIcon />
        </Button>
        <Button
          onClick={handleLogout}
          sx={{
            backgroundColor: "#fc0303",
            ":hover": { backgroundColor: "#fa3939" },
            color: "white",
          }}
        >
          <CallEndIcon />
        </Button>
      </Box>
    </Box>
  );
}
