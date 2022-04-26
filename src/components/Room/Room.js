import React, { useEffect, useState } from "react";
import Participant from "../Participant/Participant";
import ChatRoom from "../ChatRoom/ChatRoom";

import "./Room.css";
import MenuBar from "../MenuBar/MenuBar";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Room = ({
  roomName,
  room,
  handleLogout,
  currentUser,
  handleAudioMute,
  handleAudioUnmute,
  handleVideoMute,
  handleVideoUnmute,
  handleScreenShareStart,
  handleScreenShareStop,
  screenTrack
}) => {
  const [participants, setParticipants] = useState([]);
  const [displayChat, setDisplayChat] = useState(true);
  const [displayShareScreen, setDisplayShareScreen] = useState(false);
  const [sizeofgrid1, setsizeofgrid1] = useState(9);
  const [sizeofgrid2, setsizeofgrid2] = useState(3);
  const [marginMenuBar, setMarginMenuBar] = useState(24);
  // const { videoON, audioON } = useRoomContext();

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant
      key={participant.sid}
      participant={participant}
      currentUser={currentUser}
    />
  ));

  // const screenShare  = () =>{
  //   <Participant k/>
  // }


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const showChat = () => {
    if (displayChat === false) {
      setDisplayChat(true);
      setsizeofgrid1(9);
      setsizeofgrid2(3);
      setMarginMenuBar(24);
    } else if (displayChat === true) {
      setDisplayChat(false);
      setsizeofgrid1(11);
      setsizeofgrid2(0);
      setMarginMenuBar(14);
    }
  };

  const handleScreenShare = (displayScreen) => {
    console.log("displayScreen : " + displayScreen);
    setDisplayShareScreen(displayScreen);
    if (displayScreen === true) {
      handleScreenShareStart();
    } else {
      handleScreenShareStop();
    }
  };

  return (
    <main className="room">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={sizeofgrid1}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2} columns={16}>
                <Grid item xs={7.5} key="1">
                  <Box sx={{ boxShadow: 24 }}>
                    {room ? (
                      <Participant
                        totalParticipant={participants}
                        key={room.localParticipant.sid}
                        participant={room.localParticipant}
                      />
                    ) : (
                      ""
                    )}
                  </Box>
                </Grid>
                <Grid item xs={7.5} key="2">
                  <Box sx={{ boxShadow: 24 }}>{remoteParticipants}</Box>
                </Grid>
              </Grid>
              <Box>
                {displayShareScreen === true ? (
                  <Grid>
                    <Box sx={{ backgroundColor: "white" }}>
                      <Participant
                        totalParticipant={participants}
                        key={room.localParticipant.sid}
                        participant={room.localParticipant}
                      />
                    </Box>
                  </Grid>
                ) : (
                  ""
                )}
              </Box>
              <Box sx={{ mt: marginMenuBar }}>
                <MenuBar
                  handleLogout={handleLogout}
                  handleAudioMute={handleAudioMute}
                  handleAudioUnmute={handleAudioUnmute}
                  handleVideoMute={handleVideoMute}
                  handleVideoUnmute={handleVideoUnmute}
                  roomName={roomName}
                  showChat={showChat}
                  handleScreenShare={handleScreenShare}
                />
              </Box>
            </Box>
          </Grid>
          {displayChat === true ? (
            <Grid item xs={sizeofgrid2}>
              <Box sx={{ backgroundColor: "white" }}>
                <ChatRoom roomId={roomName} />
              </Box>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </Box>

      {/* <TopHeader
        participants={participants}
        participant={room.localParticipant}
      /> */}
      {/* <div className="all-participants">
        {room ? (
          <Participant
            totalParticipant={participants}
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
        {remoteParticipants}
      </div> */}
      {/* 
      <div className="chatRoom">
        <div className={displayChat}>
          <ChatRoom roomId={roomName} />
        </div>
      </div> */}
    </main>
  );
};

export default Room;
