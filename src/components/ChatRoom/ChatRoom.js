import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

// const socket = io("https://simple-chats-server.herokuapp.com/");

function ChatRoom() {
  const [state, setState] = useState({ message: "" });
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect(
      "https://simple-chats-server.herokuapp.com/"
    );
    socketRef.current.on("chat-message", ({ msg }) => {
      setChat([...chat, { msg }]);
    });
    return () => socketRef.current.disconnect();
  }, [chat]);

  const onMessageSubmit = (e) => {
    const { msg } = state;
    socketRef.current.emit("chat-message", { msg });
    e.preventDefault();
    setState({ msg : ""});
  };

  return (
    <div>
      <div id="messages"></div>
      <form id="form" onSubmit={onMessageSubmit}>
        <input id="input" autocomplete="off" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default ChatRoom;
