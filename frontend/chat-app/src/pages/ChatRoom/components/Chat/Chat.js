import React, { useState, useRef, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import "./chat.scss";
import mockMessages from "./mockMessages";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Button from "@material-ui/core/Button";
import Message from "../Message/Message";
import { isIncomingMessageCheck } from "../../../../utils/chatUtils";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  }
}));

const Chat = ({ messages, sendMessage, currentUserId }) => {
  const [inputValue, setValue] = useState("");
  const refContainer = useRef(null);

  useLayoutEffect(() => {
    scrollToBottom();
  });

  const scrollToBottom = () => {
    refContainer.current.scrollTop =
      refContainer.current.scrollHeight - refContainer.current.clientHeight;
  };

  return (
    <>
      <div className="messages-area" ref={refContainer}>
        {messages.map((message, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: isIncomingMessageCheck(
                currentUserId,
                message.authorId
              )
                ? "flex-start"
                : "flex-end"
            }}
            key={index}
          >
            <Message
              author={message.authorName}
              authorAvatar={message.authorAvatar}
              text={message.messageText}
              isIncoming={isIncomingMessageCheck(
                currentUserId,
                message.authorId
              )}
            />
          </div>
        ))}
      </div>
      {/*<div></div>*/}
      <div className="input-area">
        <Button onClick={() => console.log(1)} color="primary">
          <AttachFileIcon />
        </Button>
        <TextField
          id="outlined-multiline-flexible"
          label="Type"
          multiline
          fullWidth
          rowsMax="3"
          autoFocus
          value={inputValue}
          onChange={event => setValue(event.target.value)}
          variant="outlined"
        />
        <Button onClick={() => sendMessage(inputValue)} color="primary">
          <SendIcon />
        </Button>
      </div>
    </>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

Chat.defaultProps = {
  messages: []
};

export default Chat;
