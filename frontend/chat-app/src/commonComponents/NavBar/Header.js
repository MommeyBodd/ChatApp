import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  bar: {
    backgroundColor: "#009ddf"
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ userProfile, onHandleLogout }) => {
  const { userName, userEmail, avatar } = userProfile;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          {/*<IconButton*/}
          {/*  edge="start"*/}
          {/*  className={classes.menuButton}*/}
          {/*  color="inherit"*/}
          {/*  aria-label="menu"*/}
          {/*>*/}
          {/*  <MenuIcon />*/}
          {/*</IconButton>*/}
          <Typography variant="h6" className={classes.title}>
            Hello, {userName}!
          </Typography>
          <Button color="inherit" onClick={() => onHandleLogout()}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;