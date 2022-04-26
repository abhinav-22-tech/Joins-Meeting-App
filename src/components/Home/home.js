import { Keyboard, VideoCallOutlined } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import React, { useCallback, useEffect, useState } from "react";
import Video from "twilio-video";
import { auth } from "../../lib/firebase";
import Room from "../Room/Room";
import "./home.css";

const { createLocalVideoTrack } = require("twilio-video");

function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [roomName, setRoomName] = useState("");
  const [room, setRoom] = useState(null);
  const [username, setUsername] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user.isAnonymous);
      } else {
        setCurrentUser(null);
      }
    });

    const timer = setInterval(() => new Date(), 1000);
    return timer;
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.displayName);
    }
  }, [currentUser]);

  function randomRoom() {
    let uuid = Date.now();
    console.log(uuid);
    uuid = Math.floor(
      Math.random() * Math.floor(Math.random() * uuid.toString().slice(-9))
    );
    uuid =
      uuid.toString().substring(0, 3) +
      "-" +
      uuid.toString().substring(3, 6) +
      "-" +
      uuid.toString().substring(6, uuid.toString().length);
    console.log(uuid);
    setRoomName(uuid);
  }

  const [backDropOpen, setBackDropOpen] = React.useState(false);
  const backDrophandleClose = () => {
    setBackDropOpen(false);
  };
  const backDropHandleToggle = () => {
    setBackDropOpen(!backDropOpen);
  };

  const linkToRoom = () => {
    backDropHandleToggle();
    if (roomName !== "") {
      console.log(currentUser.displayName);
      if (currentUser.isAnonymous && currentUser.displayName === "") {
        GuestLogin();
        handleSubmit();
      } else handleSubmit();
    }
  };

  function GuestLogin() {
    currentUser
      .updateProfile({
        displayName: "Abhinav",
      })
      .then(
        function () {
          // Profile updated successfully!
          var displayName = currentUser.displayName;
          console.log(`Display Name: ${displayName}`);
        },
        function (error) {
          // An error happened.
          console.log(`Guest Login Error: ${error}`);
        }
      );
  }

  const siginOut = () => {
    if (currentUser.isAnonymous) currentUser.delete();
    auth.signOut();
  };

  const handleSubmit = useCallback(async () => {
    const data = await fetch(
      "https://twilio-meeting-server.herokuapp.com/video/token",
      {
        method: "POST",
        body: JSON.stringify({
          identity: username,
          room: roomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => res.json());
    Video.connect(data.token, {
      name: roomName,
    })
      .then((room) => {
        setRoom(room);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(data);
  }, [roomName, username]);

  const handleLogout = useCallback(() => {
    backDrophandleClose();
    setRoom((prevRoom) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub) => {
          trackPub.track.stop();
        });
        prevRoom.disconnect();
      }
      return null;
    });
  }, []);

  const handleAudioMute = () => {
    room.localParticipant.audioTracks.forEach((publication) =>
      publication.track.disable()
    );
  };

  const handleAudioUnmute = () => {
    room.localParticipant.audioTracks.forEach((publication) =>
      publication.track.enable()
    );
  };

  const handleVideoMute = () => {
    room.localParticipant.videoTracks.forEach((publication) =>
      publication.track.disable()
    );
  };

  const handleVideoUnmute = () => {
    room.localParticipant.videoTracks.forEach((publication) =>
      publication.track.enable()
    );
  };

  let screenTrack;

  const handleScreenShareStart = () => {
    navigator.mediaDevices
      .getDisplayMedia()
      .then((stream) => {
        screenTrack = new Video.LocalVideoTrack(stream.getTracks()[0]);
        room.localParticipant.publishTrack(screenTrack);
        // screenTrack.mediaStreamTrack.onended = () => {
        // };
        console.log("senctrack: " + screenTrack);
      })
      .catch(() => {
        alert("Could not share the screen.");
      });
  };

  const handleScreenShareStop = () => {
    // room.localParticipant.unpublishTrack(screenTrack);
    // screenTrack.stop();
    console.log("Screen Shairing Stop");
  };

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

  useEffect(() => {
    if (room) {
      const tidyUp = (event) => {
        if (event.persisted) {
          return;
        }
        if (room) {
          handleLogout();
        }
      };
      window.addEventListener("pagehide", tidyUp);
      window.addEventListener("beforeunload", tidyUp);
      return () => {
        window.removeEventListener("pagehide", tidyUp);
        window.removeEventListener("beforeunload", tidyUp);
      };
    }
  }, [room, handleLogout]);

  let render;
  if (room) {
    render = (
      <Room
        roomName={roomName}
        room={room}
        handleLogout={handleLogout}
        currentUser={currentUser}
        handleAudioMute={handleAudioMute}
        handleAudioUnmute={handleAudioUnmute}
        handleVideoMute={handleVideoMute}
        handleVideoUnmute={handleVideoUnmute}
        handleScreenShareStart={handleScreenShareStart}
        handleScreenShareStop={handleScreenShareStop}
        screenTrack={screenTrack}
      />
    );
  } else {
    render = (
      <div>
        <div className="home">
          <div className="home__left">
            <div className="home__buttons">
              <Button
                sx={{
                  backgroundColor: "#00a389",
                  "&:hover": { backgroundColor: "#18c2a7" },
                }}
                variant="contained"
                className="home__createBTN"
                onClick={randomRoom}
              >
                <VideoCallOutlined />
                <p>New meeting</p>
              </Button>

              <TextField
                className="home__input"
                variant="outlined"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Enter a code or link"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Keyboard className="icon" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={invitemorepeople}
                        disabled={roomName === ""}
                      >
                        <ContentCopyIcon sx={{ color: "black" }} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                color="primary"
                variant="outlined"
                className="home__joinBTN"
                disabled={roomName === ""}
                onClick={linkToRoom}
              >
                Join
              </Button>

              {/* This signout button for development purpose */}

              <Button
                onClick={siginOut}
                variant="outlined"
                className="home__signOut"
              >
                Sign Out
              </Button>
            </div>
            <div>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={backDropOpen}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </div>
        </div>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={handleCloseSnackBar}
          action={iconOfSnackBar}
          message="Successfully copied!"
        />
      </div>
    );
  }

  return render;
}

export default Home;
