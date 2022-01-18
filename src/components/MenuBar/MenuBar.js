import React from "react";
import { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import MessageIcon from "@mui/icons-material/Message";
import PanToolIcon from "@mui/icons-material/PanTool";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallEndIcon from "@mui/icons-material/CallEnd";

import Video from "twilio-video";

export default function MenuBar() {
  const [audio, setAudio] = useState(true);
  const [camera, setCamera] = useState(true);

  const audioToggle = () => {
    if (audio === false) setAudio(true);
    else if (audio === true) setAudio(false);
    // Video.LocalVideoTrack.on("stopped");
    // console.log(`Audio ${audio}`);
  };

  const cameraToggle = () => {
    if (camera === false) setCamera(true);
    else if (camera === true) setCamera(false);
  };

  const endCall = () => {
    // Video.LocalParticipant.tracks.forEach((trackPub) => {
    //   trackPub.track.stop();
    // });
    // Video.disconnect();
    Video.LocalParticipant
  };

  return (
    <>
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
        <Button sx={{ color: "white" }}>
          <MessageIcon />
        </Button>
        <Button sx={{ color: "white" }}>
          <PanToolIcon />
        </Button>
        <Button sx={{ color: "white" }}>
          <PeopleAltIcon />
        </Button>
        <Button sx={{ color: "white" }}>
          <PersonAddAlt1Icon />
        </Button>
        <Button sx={{ color: "white" }}>
          <MoreHorizIcon />
        </Button>
        <Button
          onClick={endCall}
          sx={{
            backgroundColor: "#fc0303",
            ":hover": { backgroundColor: "#fa3939" },
            color: "white",
          }}
        >
          <CallEndIcon />
        </Button>
      </Box>
    </>
  );
}
