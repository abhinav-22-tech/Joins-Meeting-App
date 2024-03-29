import { Keyboard, VideoCallOutlined } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  Button,
  IconButton,
  InputAdornment,
  Slide,
  TextField,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Video from "twilio-video";
import { auth } from "../../lib/firebase";
import Room from "../Room/Room";
import "./home.css";

const { createLocalVideoTrack } = require("twilio-video");

const theme = createTheme();

const useStyles = makeStyles(() => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  const [appState, setAppState] = useState("empty");
  const [anchorEl, setAnchorEl] = useState(null);
  const [date, setDate] = useState(new Date());

  const [roomName, setRoomName] = useState("");
  const [room, setRoom] = useState(null);
  const [username, setUsername] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [screenTrack, setScreenTrack] = useState(null);

  const classes = useStyles();
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const nameFirstChar =
    currentUser?.displayName !== null
      ? currentUser?.displayName.charAt(0).toUpperCase()
      : "";

  function stringToColor() {
    var str = currentUser?.displayName + "";
    var s = 50;
    var l = 50;
    var hash = 0;
    for (var i = 0; i < str.length; i++)
      hash = str.charCodeAt(i) + ((hash << 5) - hash);

    var h = hash % 360;
    return "hsl(" + h + ", " + s + "%, " + l + "%)";
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setAppState("home");
        // console.log("currentUser: " + user);
        console.log(user.isAnonymous);
      } else {
        setCurrentUser(null);
        setAppState("login");
      }
    });

    const timer = setInterval(() => setDate(new Date()), 1000);
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
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };

    // const handleClose = () => {
    //   setOpen(false);
    // };

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
    // setUsername("Abhinav");
    // console.log(currentUser.displayName);
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
          "access-control-allow-origin": "*",
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
    // room.localParticipant.videoTracks.forEach((publication) =>
    //   publication.track.stop()
    // );
    // room.localParticipant.videoTracks.forEach((publication) =>
    //   publication.unpublish()
    // );
  };

  const handleVideoUnmute = () => {
    // createLocalVideoTrack().then((localVideoTrack) => {
    //   room.localParticipant.publishTrack(localVideoTrack);
    // });
    room.localParticipant.videoTracks.forEach((publication) =>
      publication.track.enable()
    );
  };

  const handleScreenShareStart = () => {
    if (!screenTrack) {
      navigator.mediaDevices
        .getDisplayMedia({
          video: {
            cursor: "always",
          },
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            sampleRate: 44100,
          },
        })
        .then((stream) => {
          setScreenTrack(new Video.LocalVideoTrack(stream.getTracks()[0]));
          room.localParticipant.publishTrack(screenTrack);
          console.log("senctrack: " + screenTrack);
        })
        .catch(() => {
          alert("Could not share the screen.");
        });
    } else {
      room.localParticipant.unpublishTrack(screenTrack);
      screenTrack.stop();
      setScreenTrack(null);
    }
  };

  const handleScreenShareStop = () => {
    room.localParticipant.unpublishTrack(screenTrack);
    screenTrack.stop();
    setScreenTrack(null);
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

              {/* <Link to={`/${roomName}`}> */}
              <Button
                color="primary"
                variant="outlined"
                className="home__joinBTN"
                disabled={roomName === ""}
                onClick={linkToRoom}
              >
                Join
              </Button>
              {/* </Link> */}

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
              // onClick={backDrophandleClose}
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
