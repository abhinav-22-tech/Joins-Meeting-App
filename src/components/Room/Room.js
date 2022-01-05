import React, { useEffect, useState } from "react";
import Participant from "../Participant/Participant";
// import ChatRoom from "../ChatRoom/ChatRoom";

import "./Room.css";
import MenuBar from "../MenuBar/MenuBar";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Room = ({ roomName, room, handleLogout, currentUser }) => {
  const [participants, setParticipants] = useState([]);
  const [displayChat, setDisplayChat] = useState("displayChat");

  // const { videoON, audioON } = useRoomContext();

  console.log(participants);
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

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <main className="room">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} key="1">
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
          <Grid item xs={6} key="2">
            <Box sx={{ boxShadow: 24 }}>{remoteParticipants}</Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 4 }}>
          <MenuBar />
        </Box>
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
