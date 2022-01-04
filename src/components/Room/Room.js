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
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8 }}>
          {Array.from(Array(1)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
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
            </Grid>
          ))}
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
      <MenuBar />
    </main>
  );
};

export default Room;
