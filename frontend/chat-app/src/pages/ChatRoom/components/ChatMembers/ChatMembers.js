import React from "react";
import PropTypes from "prop-types";
import StarsIcon from "@material-ui/icons/Stars";

import "./members.scss";
import InviteModal from "../InviteModal/InviteModal";

const ChatMembers = ({
  members,
  creatorId,
  userList,
  chatId,
  onHandleUserInvite,
  currentUserId
}) => {
  return (
    <div className="members-container">
      <div className="members-area">
        {members.map(member => (
          <div
            key={member._id}
            className={`member ${
              currentUserId === member._id ? "current" : ""
            }`}
          >
            <div
              className="avatar"
              style={{ backgroundImage: `url(${member.avatar})` }}
            />
            <div className="name">{member.userName}</div>
            {creatorId === member._id && (
              <div className={"star-icon"}>
                <StarsIcon />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="add-button">
        <InviteModal
          userList={userList}
          chatId={chatId}
          onSubmit={onHandleUserInvite}
          members={members}
        />
      </div>
    </div>
  );
};
ChatMembers.defaultProps = {
  members: []
};

ChatMembers.propTypes = {
  members: PropTypes.array,
  creatorId: PropTypes.string,
  userList: PropTypes.arrayOf(PropTypes.object),
  chatId: PropTypes.string,
  onHandleUserInvite: PropTypes.func,
  currentUserId: PropTypes.string
};

export default React.memo(ChatMembers);
