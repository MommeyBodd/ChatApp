import React from "react";
import { Switch, Route } from "react-router-dom";
import { ROUTES } from "../constants/routeNames";
import LoginPage from "../modules/Login/LoginPage";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.login} component={LoginPage} />
      <Route
        exact
        path={ROUTES.profile}
        component={() => <div>hello pidor!</div>}
      />
      <Route
        exact
        path={ROUTES.chatRooms}
        component={() => <div>chats here</div>}
      />
    </Switch>
  );
};
