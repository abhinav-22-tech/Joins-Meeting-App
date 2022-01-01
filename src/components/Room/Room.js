import React, { useEffect, useState } from "react";
import Participant from "../Participant/Participant";
import ChatRoom from "../ChatRoom/ChatRoom";

import "./Room.css";

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

  return (
    <main className="room">
      {/* <TopHeader
        participants={participants}
        participant={room.localParticipant}
      /> */}
      <div className="all-participants">
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
      </div>

      <div className="chatRoom">
        <div className={displayChat}>
          <ChatRoom roomId={roomName} />
        </div>
      </div>

    </main>
  );
};

export default Room;
