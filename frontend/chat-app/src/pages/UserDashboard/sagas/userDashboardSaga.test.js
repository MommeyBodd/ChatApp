import { takeEvery } from "redux-saga/effects";
import { runSaga } from "redux-saga";
import * as userDashboardApi from "../api/userDashboardApi";
import userDashboardWatcher from "./userDashboardSaga";
import { getUserProfile } from "./userDashboardSaga";
import * as actionCreators from "../actions/userDashBoardActions";

describe("User Dashboard Saga", () => {
  describe("getUserProfile", () => {
    describe("getUserProfileWatcher", () => {
      const generator = userDashboardWatcher();

      test("should dispatch action - GET_USER_PROFILE_START", () => {
        expect(generator.next().value).toEqual(
          takeEvery(actionCreators.getUserProfileStart, getUserProfile)
        );
      });

      test("should be done on next iteration", () => {
        expect(generator.next().done).toBeTruthy();
      });
    });
  });
});
