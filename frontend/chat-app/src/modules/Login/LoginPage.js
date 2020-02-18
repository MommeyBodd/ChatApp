import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const LoginPage = ({}) => {
  const [isLoggedIn, changeStatus] = useState(null);
  console.log(isLoggedIn);

  return (
    <>
      <a href="http://localhost:3001/auth/google">Link</a>
      </>
  )

}

LoginPage.propTypes = {};

export default LoginPage;
