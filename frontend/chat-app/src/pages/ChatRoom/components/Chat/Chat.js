import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import "./chat.scss";
import mockMessages from "./mockMessages";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1)
    }
  }
}));

const Chat = ({ messages }) => {
  const classes = useStyles();

  return (
    <>
      <div className="messages-area">
        {mockMessages.map((message, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: message.incoming ? "flex-start" : "flex-end"
            }}
          >
            <div
              key={index}
              style={{
                maxWidth: 200
              }}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
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
          // value={value}
          // onChange={handleChange}
          variant="outlined"
        />
        <Button onClick={() => console.log(1)} color="primary">
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
