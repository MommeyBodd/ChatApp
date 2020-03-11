import React from "react";
import PropTypes from "prop-types";
import "./message.scss";

const Message = ({ author, authorAvatar, text, isIncoming }) => {
  return (
    <div className={`message-container ${!isIncoming ? "incoming" : ""}`}>
      <div className="author-date-area">
        {isIncoming && <div className="author">{author}</div>}
        <div className="date" />
      </div>
      <div className={`message-main-area ${!isIncoming ? "incoming" : ""}`}>
        {isIncoming && (
          <div
            className="avatar"
            style={{ backgroundImage: `url(${authorAvatar})` }}
          />
        )}
        <div className={`message ${isIncoming ? "incoming" : ""}`}>{text}</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.object,
  text: PropTypes.string,
  isIncoming: PropTypes.bool
};

export default Message;
