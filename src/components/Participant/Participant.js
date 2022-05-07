import React, { useState, useEffect, useRef } from "react";
import "./Participant.css";
import Box from "@mui/material/Box";
import { FaceMesh } from "@mediapipe/face_mesh";
import { ReactP5Wrapper } from "react-p5-wrapper";
// import Grid from "@mui/material/Grid";
// import { useAppContext } from "../../context/appContext";
// import { useRoomContext } from "../../context/videoContext";

const Participant = ({ participant, totalParticipant, currentUser }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
  const [facemeshAR, setFacemeshAR] = useState(true);
  // const { videoON } = useRoomContext();
  // const { currentUser } = useAppContext();

  const videoRef = useRef();
  const audioRef = useRef();
  const detections = useRef();

  const leftEye = [
    263, 249, 390, 373, 374, 380, 381, 382, 362, 263, 466, 388, 387, 386, 385,
    384, 398, 362,
  ];
  const rightEye = [
    33, 7, 163, 144, 145, 153, 154, 155, 133, 33, 246, 161, 160, 159, 158, 157,
    173, 133,
  ];
  const leftIris = [474, 475, 476, 477, 474];
  const rightIris = [469, 470, 471, 472, 469];
  const leftEyeBrow = [276, 283, 282, 295, 285, 300, 293, 334, 296, 336];
  const rightEyeBrow = [46, 53, 52, 65, 55, 70, 63, 105, 66, 107];
  const lips = [
    61, 146, 91, 181, 84, 17, 314, 405, 321, 375, 291, 61, 185, 40, 39, 37, 0,
    267, 269, 270, 409, 291, 78, 95, 88, 178, 87, 14, 317, 402, 318, 324, 308,
    78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308,
  ];
  const nose = [5, 275, 94];
  const foreHeadSpot = [151, 9, 8];
  const faceBorder = [
    10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379,
    378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127,
    162, 21, 54, 103, 67, 109, 10,
  ];

  const trackpubsToTracks = (trackMap) =>
    Array.from(trackMap.values())
      .map((publication) => publication.track)
      .filter((track) => track !== null);

  useEffect(() => {
    setVideoTracks(trackpubsToTracks(participant.videoTracks));
    setAudioTracks(trackpubsToTracks(participant.audioTracks));

    const trackSubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => [...videoTracks, track]);
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => [...audioTracks, track]);
      }
    };

    const trackUnsubscribed = (track) => {
      if (track.kind === "video") {
        setVideoTracks((videoTracks) => videoTracks.filter((v) => v !== track));
      } else if (track.kind === "audio") {
        setAudioTracks((audioTracks) => audioTracks.filter((a) => a !== track));
      }
    };

    participant.on("trackSubscribed", trackSubscribed);
    participant.on("trackUnsubscribed", trackUnsubscribed);

    return () => {
      setVideoTracks([]);
      setAudioTracks([]);
      participant.removeAllListeners();
    };
  }, [participant]);

  function onResults(results) {
    detections.current = results;
    // if (
    //   detections.current !== undefined &&
    //   detections.current.multiFaceLandmarks !== undefined &&
    //   detections.current.multiFaceLandmarks.length >= 1
    // ) {
    //   setFacemeshAR(true);
    // } else {
    //   setFacemeshAR(false);
    // }
    // console.log(detections.current);
  }

  useEffect(() => {
    let video;

    function runAnimationVideo() {
      window.requestAnimationFrame(function () {
        videoCheckSend();
      });
    }

    const videoTrack = videoTracks[0];
    async function setupVideo() {
      if (videoTrack) {
        videoTrack.attach(videoRef.current);
        video = videoRef.current;
        video.onloadedmetadata = function () {
          video.play().then(runAnimationVideo());
        };
        return () => {
          videoTrack.detach();
        };
      }
    }

    const faceMesh = new FaceMesh({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      },
    });

    faceMesh.setOptions({
      maxNumFaces: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      refineLandmarks: true,
    });
    faceMesh.onResults(onResults);

    const videoCheckSend = async () => {
      await faceMesh.send({ image: videoRef.current }).then(runAnimationVideo);
    };

    setupVideo();
  }, [videoTracks]);

  useEffect(() => {
    const audioTrack = audioTracks[0];
    if (audioTrack) {
      audioTrack.attach(audioRef.current);
      return () => {
        audioTrack.detach();
      };
    }
  }, [audioTracks]);

  function sketch(p) {
    p.setup = () => {
      p.createCanvas(320, 240);
      // p.colorMode(p.HSB);
    };

    p.draw = () => {
      p.clear();
      p.strokeWeight(3);
      if (detections.current !== undefined) {
        if (
          detections.current.multiFaceLandmarks !== undefined &&
          detections.current.multiFaceLandmarks.length >= 1
        ) {
          p.faceMesh();
        }
      }
    };

    p.faceMesh = () => {
      // Face
      p.fill("#f1c27d");
      p.beginShape();
      for (let i = 0; i < faceBorder.length; i++) {
        let faceX =
          detections.current.multiFaceLandmarks[0][faceBorder[i]].x * p.width;
        let faceY =
          detections.current.multiFaceLandmarks[0][faceBorder[i]].y * p.height;
        p.vertex(faceX, faceY);
      }
      p.endShape();

      // Left Eye
      p.fill("white");
      p.noStroke();
      p.beginShape();
      for (let i = 0; i < leftEye.length; i++) {
        let leyex =
          detections.current.multiFaceLandmarks[0][leftEye[i]].x * p.width;
        let leyey =
          detections.current.multiFaceLandmarks[0][leftEye[i]].y * p.height;
        p.vertex(leyex, leyey);
      }
      p.endShape();

      // Right Eye
      p.fill("white");
      p.noStroke();
      p.beginShape();
      for (let i = 0; i < rightEye.length; i++) {
        let reyex =
          detections.current.multiFaceLandmarks[0][rightEye[i]].x * p.width;
        let reyey =
          detections.current.multiFaceLandmarks[0][rightEye[i]].y * p.height;
        p.vertex(reyex, reyey);
      }
      p.endShape();

      // Left Iris
      p.fill("black");
      p.beginShape();
      for (let i = 0; i < leftIris.length; i++) {
        let lIrisX =
          detections.current.multiFaceLandmarks[0][leftIris[i]].x * p.width;
        let lIrisY =
          detections.current.multiFaceLandmarks[0][leftIris[i]].y * p.height;
        p.vertex(lIrisX, lIrisY);
      }
      p.endShape();

      // Right Iris
      p.fill("black");
      p.beginShape();
      for (let i = 0; i < rightIris.length; i++) {
        let rIrisX =
          detections.current.multiFaceLandmarks[0][rightIris[i]].x * p.width;
        let rIrisY =
          detections.current.multiFaceLandmarks[0][rightIris[i]].y * p.height;
        p.vertex(rIrisX, rIrisY);
      }
      p.endShape();

      // Left EyeBrow
      p.fill("#2C323A");
      p.beginShape();
      for (let i = 0; i < leftEyeBrow.length; i++) {
        let lEyeBrowX =
          detections.current.multiFaceLandmarks[0][leftEyeBrow[i]].x * p.width;
        let lEyeBrowY =
          detections.current.multiFaceLandmarks[0][leftEyeBrow[i]].y * p.height;
        p.vertex(lEyeBrowX, lEyeBrowY);
      }
      p.endShape();

      // Right EyeBrow
      p.fill("#2C323A");
      p.beginShape();
      for (let i = 0; i < rightEyeBrow.length; i++) {
        let rEyeBrowX =
          detections.current.multiFaceLandmarks[0][rightEyeBrow[i]].x * p.width;
        let rEyeBrowY =
          detections.current.multiFaceLandmarks[0][rightEyeBrow[i]].y *
          p.height;
        p.vertex(rEyeBrowX, rEyeBrowY);
      }
      p.endShape();

      // Lips
      p.fill("#e56d7e");
      p.stroke(255);
      p.strokeWeight(1);
      p.beginShape();
      for (let i = 0; i < lips.length; i++) {
        let lipsX =
          detections.current.multiFaceLandmarks[0][lips[i]].x * p.width;
        let lipsY =
          detections.current.multiFaceLandmarks[0][lips[i]].y * p.height;
        p.vertex(lipsX, lipsY);
      }
      p.endShape();

      // Nose
      p.fill("#6b4423");
      p.stroke(255);
      p.strokeWeight(1);
      p.beginShape();
      for (let i = 0; i < nose.length; i++) {
        let noseX =
          detections.current.multiFaceLandmarks[0][nose[i]].x * p.width;
        let noseY =
          detections.current.multiFaceLandmarks[0][nose[i]].y * p.height;
        p.vertex(noseX, noseY);
      }
      p.endShape();

      // Fore Head Spot
      p.fill("red");
      p.stroke(255);
      p.strokeWeight(3);
      p.beginShape(p.TESS);
      for (let i = 0; i < foreHeadSpot.length; i++) {
        let foreHeadSpotX =
          detections.current.multiFaceLandmarks[0][foreHeadSpot[i]].x * p.width;
        let foreHeadSpotY =
          detections.current.multiFaceLandmarks[0][foreHeadSpot[i]].y *
          p.height;
        p.vertex(foreHeadSpotX, foreHeadSpotY);
      }
      p.endShape();
    };
  }

  return (
    <div
      className={`participant ${
        totalParticipant?.length === 0 && "one_participant"
      }`}
    >
      <p className="participant-name">
        <Box sx={{ backgroundColor: "rgba(0,0,0,.4)", p: 0.4 }}>
          {participant.identity === currentUser ? "You" : participant.identity}
        </Box>
      </p>
      <Box sx={{ boxShadow: 24 }}>
        <video ref={videoRef} hidden />
        <audio ref={audioRef} autoPlay={true} />
      </Box>
      <Box sx={{ boxShadow: 24 }}>
        {facemeshAR ? <ReactP5Wrapper sketch={sketch} /> : ""}
      </Box>
    </div>
  );
};

export default Participant;
