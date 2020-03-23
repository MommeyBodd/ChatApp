import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import chatImage from "../../static/chat-benefits.png";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 325,
    width: "100%",
    marginRight: 15,
    marginBottom: 15
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));

const ChatCard = ({ userProfile, chatRoom }) => {
  const history = useHistory();
  const { googleId } = userProfile;
  const { chatName, creatorName, creatorId, _id } = chatRoom;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`${chatName}`}
        subheader={`Creator: ${creatorName} ${
          googleId === creatorId ? "(You)" : ""
        }`}
      />
      <CardMedia
        className={classes.media}
        image={`${chatImage}`}
        title="Chat Room"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          GO-GO-GO TO THE CHAT!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          color="primary"
          onClick={() => history.push(`/profile/chatRooms/${_id}`)}
        >
          Enter to Chat
        </Button>
      </CardActions>
    </Card>
  );
};

ChatCard.propTypes = {
  userProfile: PropTypes.object.isRequired,
  chatRoom: PropTypes.object.isRequired
};

export default ChatCard;
