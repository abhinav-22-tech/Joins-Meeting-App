import React from "react";
import { ChannelList } from "./ChannelList";
import "./Chat.css";
import socketClient from "socket.io-client";

const SERVER = "http://127.0.0.1:8080";

const socket = socketClient(SERVER);
socket.on("connection", () => {
  console.log(`I'm connected with the back-end`);
});

const Chat = () => {
  state = {
    channels: [{ id: 1, name: "first", participants: 10 }],
  };

  const socket = socketClient(SERVER);
  socket.on("connection", () => {
    console.log("I'm connected with the back-end");
  });

  return <div>Hello Mr. Abhinav Jain</div>;
};
export default Chat;
