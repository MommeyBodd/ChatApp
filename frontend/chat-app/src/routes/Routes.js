import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants/routeNames";
import LoginPage from "../pages/Login/components/LoginPage";
import UserDashboardContainer from "../pages/UserDashboard/containers/UserDashboardContainer";
import ChatRoomContainer from "../pages/ChatRoom/containers/ChatRoomContainer";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
      <Route exact path={ROUTES.PROFILE} component={UserDashboardContainer} />
      <Route exact path={ROUTES.CHAT_ROOMS} component={ChatRoomContainer} />
    </Switch>
  );
};
