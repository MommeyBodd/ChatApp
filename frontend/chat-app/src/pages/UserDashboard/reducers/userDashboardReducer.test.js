import userDashboardReducer from "./userDashBoardReducer";
import { initialState } from "./userDashBoardReducer";
import * as actionCreators from "../actions/userDashBoardActions";

describe("User Dashboard Reducer", () => {
  test("should return the initial state", () => {
    expect(userDashboardReducer(undefined, {})).toEqual(initialState);
  });
  describe("GET_USER_PROFILE_START", () => {
    test("should toggle isLoading to true", () => {
      expect(
        userDashboardReducer(initialState, actionCreators.getUserProfileStart())
      ).toMatchObject({ isLoading: true });
    });

    test("shouldn't toggle isLoading to true", () => {
      expect(
        userDashboardReducer(initialState, actionCreators.getUserProfileStart)
      ).toMatchObject({ isLoading: false });
    });
  });

  describe("GET_USER_PROFILE_SUCCESS", () => {
    test("should put payload to correct field", () => {
      const mockPayload = {
        profile: "aaa",
        participation: ["1"]
      };
      expect(
        userDashboardReducer(
          initialState,
          actionCreators.getUserProfileSuccess(mockPayload)
        )
      ).toMatchObject({
        userChatRooms: mockPayload.participation,
        userProfile: { ...mockPayload },
        isAuth: true,
        isLoading: false
      });
    });
  });
  describe("GET_USER_PROFILE_FAIL", () => {
    test("should put payload to error field ", () => {
      const mockErrorPayload = { success: "Fail", message: "error" };

      expect(
        userDashboardReducer(
          initialState,
          actionCreators.getUserProfileFail(mockErrorPayload)
        )
      ).toMatchObject({ errors: mockErrorPayload });
    });
  });
});
