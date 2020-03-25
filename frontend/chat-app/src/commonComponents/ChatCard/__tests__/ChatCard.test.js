import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import ChatCard from "../ChatCard";
import { checkProps } from "../../../utils/testUtils";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe("Chat Card UI testing", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  describe("Checking PropTypes", () => {
    it("Should NOT throw a warning", () => {
      const expectedProps = {
        userProfile: {},
        chatRoom: {}
      };
      const propsError = checkProps(ChatCard, expectedProps);

      expect(propsError).toBeUndefined();
    });

    it("Should throw an error", () => {
      const expectedProps = {
        userProfile: [],
        chatRoom: "Test Chat"
      };
      const propsError = checkProps(ChatCard, expectedProps);

      expect(propsError).toBeTruthy();
    });
  });

  describe("Renders", () => {
    let wrapper;

    beforeEach(() => {
      const expectedProps = {
        userProfile: {},
        chatRoom: {}
      };

      wrapper = shallow(<ChatCard {...expectedProps} />);
    });

    it("should contain phrase 'GO-GO-GO TO THE CHAT!' ", () => {
      const phraseArea = wrapper.find(Typography);
      const greetingsPhrase = phraseArea.text();

      expect(greetingsPhrase).toEqual("GO-GO-GO TO THE CHAT!");
    });

    it("should contain creatorName ChatName and and indicator 'You'", () => {
      const expectedProps = {
        userProfile: { googleId: "123" },
        chatRoom: {
          chatName: "Test",
          creatorName: "Test Creator",
          creatorId: "123"
        }
      };

      wrapper = shallow(<ChatCard {...expectedProps} />);

      const cardTitle = wrapper.find(CardHeader).prop("title");
      const cardSubtitle = wrapper.find(CardHeader).prop("subheader");

      expect(cardTitle).toEqual(expectedProps.chatRoom.chatName);
      expect(cardSubtitle).toEqual(
        `Creator: ${expectedProps.chatRoom.creatorName} (You)`
      );
    });

    it("should contain creatorName, chatName without indicator 'You'", () => {
      const expectedProps = {
        userProfile: { googleId: "123" },
        chatRoom: {
          chatName: "Test",
          creatorName: "Test Creator",
          creatorId: "1232"
        }
      };

      wrapper = shallow(<ChatCard {...expectedProps} />);

      const cardTitle = wrapper.find(CardHeader).prop("title");
      const cardSubtitle = wrapper.find(CardHeader).prop("subheader");

      expect(cardTitle).toEqual(expectedProps.chatRoom.chatName);
      expect(cardSubtitle).toEqual(
        `Creator: ${expectedProps.chatRoom.creatorName} `
      );
    });

    it("should have button with text - Enter to Chat", () => {
      const button = wrapper.find(Button);
      const buttonText = button.text();

      expect(buttonText).toEqual("Enter to Chat");
    });
  });
});
