import React from "react";

import { Button, ButtonGroup } from "@mui/material";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import MessageIcon from "@mui/icons-material/Message";
import PanToolIcon from "@mui/icons-material/PanTool";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CallEndIcon from "@mui/icons-material/CallEnd";

export default function MenuBar() {
  return (
    <>
      <Box
        component="span"
        sx={{
          backgroundColor: "#141414",
          m: "auto",
          p: 2,
          borderRadius: 3,
        }}
        display="flex" 
        width={500}
        alignItems="center"
        justifyContent="center"
      >
        <Button>
          <MicIcon sx={{ color: "#00a389" }} />
        </Button>
        <Button sx={{ color: "white" }}>
          <VideocamIcon />
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
