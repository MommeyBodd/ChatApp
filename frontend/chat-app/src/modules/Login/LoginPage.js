import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import PropTypes from "prop-types";

const LoginPage = ({}) => {
  const [isLoggedIn, changeStatus] = useState(null);
  console.log(isLoggedIn);
  return <div></div>;
};

LoginPage.propTypes = {};

export default LoginPage;
