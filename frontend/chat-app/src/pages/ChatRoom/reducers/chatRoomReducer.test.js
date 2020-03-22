import chatRoomReducer from "./chatRoomReducer";
import { initialState } from "./chatRoomReducer";
import * as actionCreators from "../actions/chatRoomActions";

describe("Chat Room Reducer", () => {
  test("should return the initial state", () => {
    expect(chatRoomReducer(undefined, {})).toEqual(initialState);
  });
  describe("GET_CHAT_ROOM_INFORMATION_START", () => {
    test("should toggle isLoading to true", () => {
      expect(
        chatRoomReducer(
          initialState,
          actionCreators.getChatRoomInformationStart()
        )
      ).toMatchObject({ isLoading: true });
    });

    test("shouldn't toggle isLoading to true", () => {
      expect(
        chatRoomReducer(
          initialState,
          actionCreators.getChatRoomInformationStart
        )
      ).toMatchObject({ isLoading: false });
    });
  });

  describe("GET_CHAT_ROOM_INFORMATION_SUCCESS", () => {
    test("should put payload to correct field", () => {
      const mockPayload = {
        participants: [],
        messages: [],
        _id: "3123asd123",
        chatName: "asd",
        creatorName: "asd",
        creatorId: "123123",
        availableUsers: []
      };
      expect(
        chatRoomReducer(
          initialState,
          actionCreators.getChatRoomInformationSuccess(mockPayload)
        )
      ).toMatchObject({ currentChatRoom: mockPayload, isLoading: false });
    });

    test("shouldn't put payload to correct field", () => {
      expect(
        chatRoomReducer(
          initialState,
          actionCreators.getChatRoomInformationSuccess()
        )
      ).toMatchObject({ currentChatRoom: undefined });
    });
  });
  describe("GET_CHAT_ROOM_INFORMATION_FAIL", () => {
    test("should put payload to error field ", () => {
      const mockErrorPayload = { success: "Fail", message: "error" };

      expect(
        chatRoomReducer(
          initialState,
          actionCreators.getChatRoomInformationFail(mockErrorPayload)
        )
      ).toMatchObject({ errors: mockErrorPayload });
    });
  });

  test("shouldn't put payload to error field ", () => {
    expect(
      chatRoomReducer(initialState, actionCreators.getChatRoomInformationFail())
    ).toMatchObject({ errors: undefined });
  });
});
