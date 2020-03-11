import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import StarsIcon from "@material-ui/icons/Stars";

import "./members.scss";
import InviteModal from "../InviteModal/InviteModal";

const ChatMembers = ({
  members,
  creatorId,
  userList,
  chatId,
  onHandleUserInvite
}) => {
  // const ownerId = useSelector(state => )
  return (
    <div className="members-container">
      {/*<div className="creator-area">*/}
      {/*  <div*/}
      {/*    className="creator-avatar"*/}
      {/*    style={{ backgroundImage: `url(${creatorAvatar})` }}*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="members-area">
        {members.map(member => (
          <div className="member">
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

ChatMembers.propTypes = {
  members: PropTypes.array,
  creatorId: PropTypes.string
};

ChatMembers.defaultProps = {
  members: []
};

export default ChatMembers;
