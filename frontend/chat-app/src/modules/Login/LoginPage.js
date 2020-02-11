import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PropTypes from "prop-types";

const LoginPage = ({}) => {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        href={"http://localhost:3030/auth/google"}
        target={"_blank"}
      >
        Google +
      </Button>
    </div>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
