import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";

import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  bar: {
    backgroundColor: "#182d44"
  },
  title: {
    flexGrow: 1
  },
  centeredTitle: {
    flexGrow: 1,
    textAlign: "center"
  }
}));

const Header = ({ userProfile, onHandleLogout, chatName }) => {
  const { userName } = userProfile;
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          {chatName && (
            <Button color="inherit" onClick={() => history.push("/profile")}>
              <KeyboardBackspaceIcon />
            </Button>
          )}
          <Typography
            variant="h6"
            className={!chatName ? classes.title : classes.centeredTitle}
          >
            {!chatName ? `Hello, ${userName}!` : chatName}
          </Typography>
          <Button color="inherit" onClick={() => onHandleLogout()}>
            Logout
          </Button>
          <div></div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.defaultProps = {
  userProfile: {}
};

Header.propTypes = {
  userProfile: PropTypes.object,
  onHandleLogout: PropTypes.func,
  chatName: PropTypes.string
};

export default Header;
