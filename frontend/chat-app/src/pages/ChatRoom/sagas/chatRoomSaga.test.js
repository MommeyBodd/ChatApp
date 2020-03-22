import { put, takeEvery } from "redux-saga/effects";
import chatRoomSagaActionWatcher from "./chatRoomSaga";
import { getChatRoomInfo } from "./chatRoomSaga";
import * as actionCreators from "../actions/chatRoomActions";

describe("Chat Room Saga", () => {
  test("should dispatch action GET_CHAT_ROOM_INFORMATION_START", () => {
    const generator = chatRoomSagaActionWatcher();

    console.log(generator.value);
    expect(generator.next().value).toEqual(
      takeEvery(actionCreators.getChatRoomInformationStart, getChatRoomInfo)
    );
    expect(generator.done).toBeTruthy();
  });
});
