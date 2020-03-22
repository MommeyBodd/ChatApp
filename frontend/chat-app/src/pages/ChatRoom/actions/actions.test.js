import * as actionCreators from "../actions/chatRoomActions";

describe("Chat Room Actions", () => {
  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_CHAT_ROOM_INFORMATION_START" };

    expect(actionCreators.getChatRoomInformationStart()).toEqual(
      expectedAction
    );
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_AVAILABLE_USERS_START" };

    expect(actionCreators.getAvailableUsersStart()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_CHAT_ROOM_INFORMATION_SUCCESS" };

    expect(actionCreators.getChatRoomInformationSuccess()).toEqual(
      expectedAction
    );
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_CHAT_ROOM_INFORMATION_FAIL" };

    expect(actionCreators.getChatRoomInformationFail()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_AVAILABLE_USERS_SUCCESS" };

    expect(actionCreators.getAvailableUsersSuccess()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "GET_AVAILABLE_USERS_FAIL" };

    expect(actionCreators.getAvailableUsersFail()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "INVITE_USER_REQUEST" };

    expect(actionCreators.inviteUserRequest()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "INVITE_USER_SUCCESS" };

    expect(actionCreators.inviteUserSuccess()).toEqual(expectedAction);
  });

  test("should create an action with correct type", () => {
    const expectedAction = { type: "INVITE_USER_FAIL" };

    expect(actionCreators.inviteUserFail()).toEqual(expectedAction);
  });
});
