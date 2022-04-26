import React, { useRef, useState, useEffect } from "react";
import { SecureLink } from "react-secure-link";

import useChat from "./useChatRoom";
import "./ChatRoom.css";
import SendIcon from "@mui/icons-material/Send";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { PhotoCamera } from "@mui/icons-material";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
import { IconButton } from "@mui/material";
import InsertEmoticonSharpIcon from "@mui/icons-material/InsertEmoticonSharp";
import Image from "./Image";
import Picker from "emoji-picker-react";
import Linkify from "react-linkify";

const Room = ({ roomId }) => {
  // const { roomId } = props.match.params;
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = useState("");
  const [file, setFile] = useState();
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [displayEmoji, setDisplayEmoji] = useState("notDisplayEmoji");
  const messageRef = useRef();

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    console.log(newMessage);
    if (newMessage !== "") {
      sendMessage(newMessage, file);
      setNewMessage("");
      setFile();
      setDisplayEmoji("notDisplayEmoji");
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const selectFile = (e) => {
    setNewMessage(e.target.files[0].name);
    setFile(e.target.files[0]);
  };

  const renderMessages = (message, i) => {
    if (message.type === "file") {
      const blob = new Blob([message.body], { type: message.type });
      return (
        <div
          key={i}
          className={message.isOwner ? "my-message" : "received-message"}
        >
          <div className="msgBody">
            <Image fileName={message.fileName} blob={blob} />
          </div>
        </div>
      );
    }

    return (
      <div
        key={i}
        className={message.isOwner ? "my-message" : "received-message"}
      >
        <div className="msgBody">
          <Linkify
            componentDecorator={(decoratedHref, decoratedText) => (
              <SecureLink href={decoratedHref}>{decoratedText}</SecureLink>
            )}
          >
            {message.body}
          </Linkify>
        </div>
      </div>
    );
  };

  const onEmojiClick = (event, emojiObject) => {
    setNewMessage(newMessage + emojiObject.emoji);
    setChosenEmoji(emojiObject);
  };

  const disEmoji = () => {
    if (displayEmoji === "notDisplayEmoji") setDisplayEmoji("displayEmoji");
    else if (displayEmoji === "displayEmoji")
      setDisplayEmoji("notDisplayEmoji");
  };

  useEffect(() => messageRef.current.scrollIntoView({ behavior: "smooth" }));

  return (
    // <div className="msg_container">
    <div className="chatbox">
      <div className="chatRoomMain">
        {/* <div className="group_chat_bar">
          <span className="group_chat_title">Chats</span>
        </div> */}
        <AppBar
          position="static"
          sx={{ height: 40, color: "black", background: "transparent", alignItems: "center"}}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Chats
          </Typography>
        </AppBar>
        <div className="chat-container">
          <div className="msg">
            <ol id="messages">{messages.map(renderMessages)}</ol>
            <div ref={messageRef}></div>
          </div>

          <div className={displayEmoji}>
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        </div>
        <div id="form" className="textField">
          <label htmlFor="raised-button-file">
            <input
              accept="image/*"
              onChange={selectFile}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
            />
            <IconButton
              className="camera"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>

          {/* <label htmlFor="raised-button-file">
            <input
              accept="image/*"
              onChange={selectFile}
              style={{ display: "none" }}
              id="raised-button-files"
              multiple
              type="file"
            />
            <IconButton aria-label="upload picture" component="span">
              <AttachFileIcon />
            </IconButton>
          </label> */}

          <label>
            <IconButton aria-label="emoji" component="span" onClick={disEmoji}>
              <InsertEmoticonSharpIcon />
            </IconButton>
          </label>

          <input
            id="message"
            placeholder="Enter message here"
            value={newMessage}
            onChange={handleNewMessageChange}
            onKeyUp={handleKeyUp}
          />

          {/* <TextField
          id="message"
          label="Enter message here"
          variant="outlined"
          value={newMessage}
          onChange={handleNewMessageChange}
          onKeyUp={handleKeyUp}
          style={{width: "100%"}}
        /> */}

          <button onClick={handleSendMessage}>
            <SendIcon />
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Room;
