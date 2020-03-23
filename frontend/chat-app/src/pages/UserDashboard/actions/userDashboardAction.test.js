import * as actionCreators from "../actions/userDashBoardActions";

describe("User Dashboard Actions", () => {
  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_USER_PROFILE_START" };

    expect(actionCreators.getUserProfileStart()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_USER_PROFILE_SUCCESS" };

    expect(actionCreators.getUserProfileSuccess()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_USER_PROFILE_FAIL" };

    expect(actionCreators.getUserProfileFail()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "CREATE_CHAT_ROOM_REQUEST" };

    expect(actionCreators.createChatRoomRequest()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "CREATE_CHAT_ROOM_SUCCESS" };

    expect(actionCreators.createChatRoomSuccess()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "CREATE_CHAT_ROOM_FAIL" };

    expect(actionCreators.createChatRoomFail()).toEqual(expectedAction);
  });
});
