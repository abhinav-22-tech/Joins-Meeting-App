import React from "react";
import { useState} from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MessageIcon from "@mui/icons-material/Message";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import PanToolIcon from "@mui/icons-material/PanTool";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallEndIcon from "@mui/icons-material/CallEnd";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare';

import Snackbar from "@mui/material/Snackbar";

export default function MenuBar({
  handleLogout,
  handleAudioMute,
  handleAudioUnmute,
  handleVideoMute,
  handleVideoUnmute,
  showChat,
  roomName,
  handleScreenShare
}) {
  const [audio, setAudio] = useState(true);
  const [camera, setCamera] = useState(true);
  const [message, setMessage] = useState(true);
  // const [raiseHand, setRaiseHand] = useState(false);
  const [screenSharing, setScreenSharing] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

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

  const screenSharingToggle = () => {
    if (screenSharing === false) {
      setScreenSharing(true);
      handleScreenShare(true);
    } else if (screenSharing === true) {
      setScreenSharing(false);
      handleScreenShare(false);
    }
  };

  // const raiseHandToggle = () => {
  //   if (raiseHand === false) {
  //     setRaiseHand(true);
  //     // handleVideoUnmute();
  //   } else if (raiseHand === true) {
  //     setRaiseHand(false);
  //     // handleVideoMute();
  //   }
  // };

  const invitemorepeople = () => {
    navigator.clipboard.writeText(
      `Joins Meeting info \nVideo call link: https://abhinav-22-tech.github.io/Joins-Meeting-App/ \nRoom Code: ${roomName}`
    );
    setOpenSnackbar(true);
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const iconOfSnackBar = (
    <React.Fragment>
      <ContentCopyIcon sx={{ color: "white" }} />
    </React.Fragment>
  );

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
        width={430}
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
            <MessageIcon sx={{ color: "#972ab5" }} />
          ) : (
            <ChatBubbleOutlineIcon sx={{ color: "white" }} />
          )}
        </Button>
        <Button onClick={screenSharingToggle} sx={{ color: "white" }}>
          {screenSharing === true ? (
            <ScreenShareIcon sx={{ color: "#3277a8" }} />
          ) : (
            <StopScreenShareIcon sx={{ color: "white" }} />
          )}
        </Button>
        {/* <Button onClick={raiseHandToggle} sx={{ color: "white" }}>
          {raiseHand === true ? (
            <PanToolIcon sx={{ color: "#00a389" }} />
          ) : (
            <PanToolIcon sx={{ color: "white" }} />
          )}
        </Button> */}
        {/* <Button sx={{ color: "white" }}>
          <PeopleAltIcon />
        </Button> */}
        <Button sx={{ color: "white" }} onClick={invitemorepeople}>
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

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackBar}
        action={iconOfSnackBar}
        message="Successfully copied!"
      />
    </Box>
  );
}
