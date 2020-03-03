import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import chatImage from "../../static/chat-benefits.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    marginRight: 15
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
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
  // avatar: {
  //  background: `url(${})`
  // }
}));

const ChatCard = ({ userProfile, chatRoom }) => {
  const { avatar, googleId } = userProfile;
  const { chatName, creatorName, creatorId } = chatRoom;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ background: `url${avatar}` }} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${chatName}`}
        subheader={`Creator: ${creatorName} ${
          googleId === creatorId ? "(You)" : ""
        }`}
      />
      <CardMedia
        className={classes.media}
        image={`${chatImage}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          GO-GO-GO TO THE CHAT!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/*<IconButton aria-label="add to favorites">*/}
        {/*  <FavoriteIcon />*/}
        {/*</IconButton>*/}
        <Button color="primary">Enter to Chat</Button>
        {/*<IconButton*/}
        {/*  className={clsx(classes.expand, {*/}
        {/*    [classes.expandOpen]: expanded*/}
        {/*  })}*/}
        {/*  onClick={handleExpandClick}*/}
        {/*  aria-expanded={expanded}*/}
        {/*  aria-label="show more"*/}
        {/*>*/}
        {/*  <ExpandMoreIcon />*/}
        {/*</IconButton>*/}
      </CardActions>
    </Card>
  );
};

ChatCard.propTypes = {};

export default ChatCard;
