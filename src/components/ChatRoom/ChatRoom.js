import React, { useRef, useState, useEffect } from "react";

import useChat from "./useChatRoom";
import "./ChatRoom.css";

const Room = () => {
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");
  const messageRef = useRef();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== "") {
      sendMessage(newMessage);
      setNewMessage("");
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      if (newMessage !== "") {
        sendMessage(newMessage);
        setNewMessage("");
      }
    }
  };

  useEffect(() => messageRef.current.scrollIntoView({ behavior: "smooth" }));

  return (
    <div>
      <div>
        <ol id="messages">
          {messages.map((message, i) => (
            <li key={i}>
              <span>{message.body}</span>
            </li>
          ))}
        </ol>
        <div ref={messageRef}></div>
      </div>
      <div id="form">
        <input
          id="message"
          placeholder="Enter message here"
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyUp={handleKeyUp}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Room;
