import React from "react";
import PropTypes from "prop-types";

const Chat = ({ messages }) => {
  return (
    <div>
      <div className="messages-area">
        {messages.map(message => (
          <div>{message}</div>
        ))}
      </div>
    </div>
  );
};

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

Chat.defaultProps = {
  messages: []
};

export default Chat;
