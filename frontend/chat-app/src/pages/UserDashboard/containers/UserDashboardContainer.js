import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UserDashBoardLayout from "../components/UserDashboardLayout/UserDashboardLayout";
import { getUserProfileStart } from "../actions/userDashBoardActions";
import { isEmpty } from "lodash";
import queryString from "query-string";
import { login } from "../actions/authActions";

const UserDashboardContainer = ({ location, history }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.userDashBoard.isAuth);
  const isLoading = useSelector(state => state.userDashBoard.isAuth);
  const userProfile = useSelector(state => state.userDashBoard.userProfile);

  useEffect(() => {
    const { token } = queryString.parse(location.search);
    const localStorageToken =
      localStorage.token && localStorage.token.split(" ")[1];

    const tokenToUse = token || localStorageToken;
    dispatch(getUserProfileStart({ token: tokenToUse, history }));
  }, [isLoading]);

  return <UserDashBoardLayout userProfile={userProfile} />;
};

UserDashboardContainer.propTypes = {};

export default connect(null, null)(UserDashboardContainer);
