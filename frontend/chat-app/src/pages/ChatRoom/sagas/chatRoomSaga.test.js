import { takeEvery } from "redux-saga/effects";
import { runSaga } from "redux-saga";
import * as chatApi from "../api/chatApi";
import {
  getChatRoomInfoWatcher,
  getAvailableUsersWatcher,
  inviteUserWatcher
} from "./chatRoomSaga";
import { getChatRoomInfo, getAvailableUsers, inviteUser } from "./chatRoomSaga";
import * as actionCreators from "../actions/chatRoomActions";

describe("Chat Room Saga", () => {
  describe("getChatRoomInfoSaga", () => {
    describe("getChatRoomInfoWatcher", () => {
      const generator = getChatRoomInfoWatcher();

      test("should dispatch action - GET_CHAT_ROOM_INFORMATION_START", () => {
        expect(generator.next().value).toEqual(
          takeEvery(actionCreators.getChatRoomInformationStart, getChatRoomInfo)
        );
      });

      test("should be done on next iteration", () => {
        expect(generator.next().done).toBeTruthy();
      });
    });

    describe("getChatRoomInfoWorker", () => {
      test("should call api and dispatch success action", async () => {
        const mockPayload = {
          participants: [],
          messages: [],
          _id: "3123asd123",
          chatName: "asd",
          creatorName: "asd",
          creatorId: "123123",
          availableUsers: []
        };

        const requestInfo = jest
          .spyOn(chatApi, "getChatInfo")
          .mockImplementation(() => Promise.resolve(mockPayload));

        const dispatched = [];

        await runSaga(
          {
            dispatch: action => dispatched.push(action)
          },
          getChatRoomInfo,
          mockPayload
        );

        expect(requestInfo).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
          actionCreators.getChatRoomInformationSuccess(mockPayload.data)
        ]);
        requestInfo.mockClear();
      });

      test("sould call api and dispatch error action", async () => {
        const requestInfo = jest
          .spyOn(chatApi, "getChatInfo")
          .mockImplementation(() => Promise.reject());

        const dispatched = [];

        await runSaga(
          {
            dispatch: action => dispatched.push(action)
          },
          getChatRoomInfo,
          {}
        );

        expect(requestInfo).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
          actionCreators.getChatRoomInformationFail()
        ]);
        requestInfo.mockClear();
      });
    });
  });

  describe("getAvailableUsersSaga", () => {
    describe("getAvailableUsersSagaWatcher", () => {
      const generator = getAvailableUsersWatcher();

      test("should dispatch action - GET_AVAILABLE_USERS_START", () => {
        expect(generator.next().value).toEqual(
          takeEvery(actionCreators.getAvailableUsersStart, getAvailableUsers)
        );
      });

      test("should be done on next iteration", () => {
        expect(generator.next().done).toBeTruthy();
      });
    });
    describe("getAvailableUsersSagaWorker", () => {
      test("should call api and dispatch success action", async () => {
        const mockPayload = {
          availableUsers: ["1"]
        };

        const requestInfo = jest
          .spyOn(chatApi, "getAvailableUsers")
          .mockImplementation(() => Promise.resolve(mockPayload));

        const dispatched = [];

        await runSaga(
          {
            dispatch: action => dispatched.push(action)
          },
          getAvailableUsers,
          mockPayload
        );

        expect(requestInfo).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
          actionCreators.getAvailableUsersSuccess(mockPayload.data)
        ]);
        requestInfo.mockClear();
      });

      test("should call api and dispatch error action", async () => {
        const requestInfo = jest
          .spyOn(chatApi, "getAvailableUsers")
          .mockImplementation(() => Promise.reject());

        const dispatched = [];

        await runSaga(
          {
            dispatch: action => dispatched.push(action)
          },
          getAvailableUsers,
          {}
        );

        expect(requestInfo).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([actionCreators.getAvailableUsersFail()]);
        requestInfo.mockClear();
      });
    });
  });

  describe("inviteUserSaga", () => {
    describe("inviteUserSagaWatcher", () => {
      const generator = inviteUserWatcher();

      test("should dispatch action - INVITE_USER_REQUEST", () => {
        expect(generator.next().value).toEqual(
          takeEvery(actionCreators.inviteUserRequest, inviteUser)
        );
      });

      test("should be done on next iteration", () => {
        expect(generator.next().done).toBeTruthy();
      });
    });
    describe("inviteUserSagaWorker", () => {
      test("should call api and dispatch success action", async () => {
        const mockPayload = {
          availableUsers: ["1"]
        };

        const requestInfo = jest
          .spyOn(chatApi, "inviteUser")
          .mockImplementation(() => Promise.resolve(mockPayload));

        const dispatched = [];

        await runSaga(
          {
            dispatch: action => dispatched.push(action)
          },
          inviteUser,
          mockPayload
        );

        expect(requestInfo).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([
          actionCreators.inviteUserSuccess(mockPayload.data)
        ]);
        requestInfo.mockClear();
      });

      test("should call api and dispatch error action", async () => {
        const requestInfo = jest
          .spyOn(chatApi, "inviteUser")
          .mockImplementation(() => Promise.reject());

        const dispatched = [];

        await runSaga(
          {
            dispatch: action => dispatched.push(action)
          },
          inviteUser,
          {}
        );

        expect(requestInfo).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([actionCreators.inviteUserFail()]);
        requestInfo.mockClear();
      });
    });
  });
});
