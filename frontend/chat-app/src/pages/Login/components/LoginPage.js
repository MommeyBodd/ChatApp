import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "../styles/style";
import PropTypes from "prop-types";

const LoginPage = ({}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.text}>Welcome to the Chat APP!</h1>
      <Button
        className={classes.button}
        color="secondary"
        variant="contained"
        href="http://localhost:3001/auth/google"
      >
        GOOGLE+
      </Button>
    </div>
  );
};

LoginPage.propTypes = {};

export default React.memo(LoginPage);
