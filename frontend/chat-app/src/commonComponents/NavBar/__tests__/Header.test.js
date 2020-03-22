import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import Header from "../Header";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { checkProps } from "../../../utils/testUtils";
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("Header UI testing", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        userProfile: {
          userName: "asd"
        },
        onHandleLogout: () => {},
        chatName: "Test Chat"
      };
      const propsError = checkProps(Header, expectedProps);

      expect(propsError).toBeUndefined();
    });

    it("Should throw an error", () => {
      const expectedProps = {
        userProfile: [],
        onHandleLogout: () => {},
        chatName: "Test Chat"
      };
      const propsError = checkProps(Header, expectedProps);

      expect(propsError).toBeTruthy();
    });
  });

  describe("Renders", () => {
    let mockFunction;
    let wrapper;

    beforeEach(() => {
      mockFunction = jest.fn();
      const expectedProps = {
        userProfile: {
          userName: "asd"
        },
        onHandleLogout: mockFunction
      };

      wrapper = shallow(<Header {...expectedProps} />);
    });

    it("should contain greeting", () => {
      const greetingsArea = wrapper.find(Typography);
      const greetingsPhrase = greetingsArea.text();

      expect(greetingsPhrase).toEqual("Hello, asd!");
    });

    it("should contain chatName", () => {
      const expectedProps = {
        userProfile: {
          userName: "asd"
        },
        onHandleLogout: mockFunction,
        chatName: "Test Chat"
      };

      wrapper = shallow(<Header {...expectedProps} />);

      const chatName = wrapper.find(Typography).text();

      expect(chatName).toEqual("Test Chat");
    });

    it("should have button with text - Logout", () => {
      const button = wrapper.find(Button);
      const buttonText = button.text();

      expect(buttonText).toEqual("Logout");
    });

    it("should emit callback on click event", () => {
      const button = wrapper.find(Button);

      button.simulate("click");

      const callback = mockFunction.mock.calls.length;

      expect(callback).toBe(1);
    });
  });
});
