// Research Pending for network Quality

import Video from "twilio-video";
// eslint-disable-next-line no-undef
var token = getAccessToken();

Video.connect(token, {
  name: "my-room",
  audio: { name: "microphone" },
  video: { name: "camera" },
  networkQuality: {
    local: 1, // LocalParticipant's Network Quality verbosity [1 - 3]
    remote: 2, // RemoteParticipants' Network Quality verbosity [0 - 3]
  },
}).then(function (room) {
  // Change Network Quality verbosity levels after joining the Room
  room.localParticipant.setNetworkQualityConfiguration({
    local: 2,
    remote: 1,
  });
});
