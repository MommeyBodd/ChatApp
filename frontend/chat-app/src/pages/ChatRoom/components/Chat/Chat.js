import React, { useState, useRef, useLayoutEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import "./chat.scss";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Button from "@material-ui/core/Button";
import Message from "../Message/Message";
import {
  isIncomingMessageCheck,
  validateInputValue
} from "../../../../utils/chatUtils";

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
  }, [messages]);

  const scrollToBottom = useCallback(() => {
    refContainer.current.scrollTop =
      refContainer.current.scrollHeight - refContainer.current.clientHeight;
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      sendMessage(inputValue);
      setValue("");
    },
    [inputValue]
  );

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
      <form action="submit" onSubmit={event => handleSubmit(event)}>
        <div className="input-area">
          <Button onClick={() => alert("Not implemented yet")} color="primary">
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
          <Button
            type="submit"
            color="primary"
            disabled={validateInputValue(inputValue)}
          >
            <SendIcon />
          </Button>
        </div>
      </form>
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
