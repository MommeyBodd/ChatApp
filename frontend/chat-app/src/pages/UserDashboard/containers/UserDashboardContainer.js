import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserDashBoardLayout from "../components/UserDashboardLayout/UserDashboardLayout";
import { getUserProfileStart } from "../actions/userDashBoardActions";
import queryString from "query-string";
import { logout } from "../actions/authActions";
import { Spinner } from "../../../commonComponents/Spinner/Spinner";

const UserDashboardContainer = ({ location, history }) => {
  const dispatch = useDispatch();

  const { isAuth, isLoading, userProfile, userChatRooms } = useSelector(
    state => state.userDashBoard
  );

  useEffect(() => {
    const { token } = queryString.parse(location.search);

    const localStorageToken =
      localStorage.token && localStorage.token.split(" ")[1];

    const tokenToUse = token || localStorageToken;

    dispatch(getUserProfileStart({ token: tokenToUse, history }));
  }, []);

  const onHandleLogout = useCallback(() => dispatch(logout({ history })), []);

  return isLoading ? (
    <Spinner />
  ) : (
    isAuth && (
      <UserDashBoardLayout
        userProfile={userProfile}
        userChatRooms={userChatRooms}
        onHandleLogout={onHandleLogout}
        isLoading={isLoading}
      />
    )
  );
};

export default React.memo(UserDashboardContainer);
