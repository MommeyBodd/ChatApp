import React from "react";
import UserDashboardContainer from "../UserDashboardContainer";
import configureStore from "redux-mock-store";
import { shallow } from "enzyme";
import * as ReactReduxHooks from "../react-redux-hooks/react-redux-hooks";
import { Spinner } from "../../../../commonComponents/Spinner/Spinner";
import UserDashBoardLayout from "../../components/UserDashboardLayout/UserDashboardLayout";
import LoginPage from "../../../Login/components/LoginPage";

describe("UserDashboardContainer", () => {
  let wrapper;
  let useEffect;
  let store;

  const mockUseEffect = () => {
    useEffect.mockImplementationOnce(f => f());
  };

  beforeEach(() => {
    store = configureStore()({
      isLoading: false,
      isAuth: false,
      userProfile: {},
      userChatRooms: [],
      errors: null
    });

    useEffect = jest.spyOn(React, "useEffect");
    mockUseEffect();
    mockUseEffect();

    jest
      .spyOn(ReactReduxHooks, "useSelector")
      .mockImplementation(state => store.getState());

    jest
      .spyOn(ReactReduxHooks, "useDispatch")
      .mockImplementation(() => store.dispatch);

    wrapper = shallow(
      <UserDashboardContainer
        location={{
          search: "?token=123"
        }}
        history={"asdasdasd"}
      />
    );
  });

  describe("On Mount", () => {
    it("dispatch getUserProfileStart action to store with correct payload", () => {
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          type: "GET_USER_PROFILE_START",
          payload: {
            token: "123",
            history: "asdasdasd"
          }
        }
      ]);
    });
  });

  describe("When isLoading true", () => {
    let wrapper;

    beforeEach(() => {
      store = configureStore()({
        isLoading: true,
        isAuth: false,
        userProfile: {},
        userChatRooms: [],
        errors: null
      });

      wrapper = shallow(
        <UserDashboardContainer
          location={{
            search: "?token=123"
          }}
          history={"asdasdasd"}
        />
      );
    });

    it("should show Spinner component and UserDashBoardLayout must be hidden", () => {
      const spinner = wrapper.find(Spinner);
      const dashBoard = wrapper.find(UserDashBoardLayout);

      expect(spinner).toHaveLength(1);
      expect(dashBoard).toHaveLength(0);
    });
  });

  describe("When isLoading false and isAuth true", () => {
    let wrapper;

    beforeEach(() => {
      store = configureStore()({
        isLoading: false,
        isAuth: true,
        userProfile: {},
        userChatRooms: [],
        errors: null
      });

      wrapper = shallow(
        <UserDashboardContainer
          location={{
            search: "?token=123"
          }}
          history={"asdasdasd"}
        />
      );
    });

    it("should show UserDashBoardLayout component and Spinner must be hidden", () => {
      const spinner = wrapper.find(Spinner);
      const dashBoard = wrapper.find(UserDashBoardLayout);

      expect(spinner).toHaveLength(0);
      expect(dashBoard).toHaveLength(1);
    });
  });

  describe("When isLoading false and isAuth false", () => {
    let wrapper;

    beforeEach(() => {
      store = configureStore()({
        isLoading: false,
        isAuth: false,
        userProfile: {},
        userChatRooms: [],
        errors: null
      });

      wrapper = shallow(
        <UserDashboardContainer
          location={{
            search: "?token=123"
          }}
          history={"asdasdasd"}
        />
      );
    });

    it("should NOT show UserDashBoardLayout content if is auth false", () => {
      const spinner = wrapper.find(Spinner);
      const dashBoard = wrapper.find(UserDashBoardLayout);

      expect(spinner).toHaveLength(0);
      expect(dashBoard).toHaveLength(0);
    });
  });
});
