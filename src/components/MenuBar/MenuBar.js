import React from "react";

import { Button, ButtonGroup } from "@mui/material";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamIcon from "@mui/icons-material/Videocam";
import MessageIcon from "@mui/icons-material/Message";
import PanToolIcon from '@mui/icons-material/PanTool';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CallEndIcon from '@mui/icons-material/CallEnd';
import { color } from "@mui/system";

export default function MenuBar() {
  return (
    <>
      <Box component="span" sx={{ p: 2, backgroundColor: "#141414", ml: 60 }}>
        <Button color="secondary"><MicIcon/></Button>
        <Button><VideocamIcon/></Button>
        <Button><MessageIcon/></Button>
        <Button><PanToolIcon/></Button>
        <Button><PeopleAltIcon/></Button>
        <Button><PersonAddAlt1Icon/></Button>
        <Button sx={{backgroundColor: "red", color: "white"}}><CallEndIcon/></Button>
        <Button><MoreHorizIcon/></Button>
      </Box>
    </>
  );
}
