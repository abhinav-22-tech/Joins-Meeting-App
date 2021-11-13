import React, { useRef, useState, useEffect } from "react";

import useChat from "./useChatRoom";
import "./ChatRoom.css";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Button } from "@mui/material";
import Image from "./Image";
import { Button } from "@mui/material";
import { color } from "@mui/system";

const Room = (props) => {
  const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState();

  const messageRef = useRef();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage !== "") {
      sendMessage(newMessage, file);
      setNewMessage("");
      setFile();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => messageRef.current.scrollIntoView({ behavior: "smooth" }));

  const selectFile = (e) => {
    setNewMessage(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  const renderMessages = (message, i) => {
    if (message.type === "file") {
      const blob = new Blob([message.body], { type: message.type });
      return (
        <li
          key={i}
          className={message.isOwner ? "my-message" : "received-message"}
        >
          <Image fileName={message.fileName} blob={blob} />
        </li>
      );
    }

    return (
      <li
        key={i}
        className={message.isOwner ? "my-message" : "received-message"}
      >
        <span>{message.body}</span>
      </li>
    );
  };

  return (
    <div>
      <div>
        <ol id="messages">{messages.map(renderMessages)}</ol>
        <div ref={messageRef}></div>
      </div>
      <div id="form">
<<<<<<< HEAD
      <input
=======
        <input
>>>>>>> 244acdc647bb3411191e771b0548932793a15746
          accept="image/*"
          onChange={selectFile}
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
        />
        <label htmlFor="raised-button-file">
          <Button
<<<<<<< HEAD
            // style={{backgroundColor: "green"}}
            className="attach"
            variant="success"
=======
            variant="raised"
            style={{ backgroundColor: "green" }}
>>>>>>> 244acdc647bb3411191e771b0548932793a15746
            component="span"
          >
            <AttachFileIcon />
          </Button>
        </label>
<<<<<<< HEAD
=======

>>>>>>> 244acdc647bb3411191e771b0548932793a15746
        <input
          id="message"
          placeholder="Enter message here"
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyUp={handleKeyUp}
        />

        <button onClick={handleSendMessage}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Room;
