import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserDashBoardLayout from "../components/UserDashboardLayout/UserDashboardLayout";
import { getUserProfileStart } from "../actions/userDashBoardActions";
import queryString from "query-string";
import { logout } from "../actions/authActions";
import socketIOClient from "socket.io-client";

const UserDashboardContainer = ({ location, history }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.userDashBoard.isAuth);
  const isLoading = useSelector(state => state.userDashBoard.isAuth);
  const userProfile = useSelector(state => state.userDashBoard.userProfile);
  const socket = socketIOClient("http://localhost:3001");

  useEffect(() => {
    const { token } = queryString.parse(location.search);
    const localStorageToken =
      localStorage.token && localStorage.token.split(" ")[1];

    const tokenToUse = token || localStorageToken;
    console.log(tokenToUse);
    dispatch(getUserProfileStart({ token: tokenToUse, history }));

    // socket.on("FromAPI", data => console.log(data));
  }, []);

  const onHandleLogout = useCallback(() => dispatch(logout({ history })), []);

  return (
    isAuth && (
      <UserDashBoardLayout
        userProfile={userProfile}
        onHandleLogout={onHandleLogout}
      />
    )
  );
};

UserDashboardContainer.propTypes = {};

export default connect(null, null)(React.memo(UserDashboardContainer));
