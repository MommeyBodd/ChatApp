import React from "react";
import Message from "../Message";
import { checkProps } from "../../../../../utils/testUtils";
import { shallow, mount } from "enzyme";

describe("Message UI testing", () => {
  describe("Checking PropTypes", () => {
    it("should NOT throw a propTypes warning", () => {
      const expectedProps = {
        author: "",
        text: "",
        isIncoming: false
      };
      const propsError = checkProps(Message, expectedProps);

      expect(propsError).toBeUndefined();
    });

    it("should throw a propTypes warning", () => {
      const expectedProps = {
        author: {},
        text: "",
        isIncoming: []
      };
      const propsError = checkProps(Message, expectedProps);

      expect(propsError).toBeTruthy();
    });
  });

  describe("class names assigning in according of isIncoming prop", () => {
    describe("isIncoming", () => {
      beforeEach(() => {});
      it('should add "incoming" class  to message-container & message-main-area elements', () => {
        const props = {
          isIncoming: false
        };

        const wrapper = shallow(<Message {...props} />);

        expect(
          wrapper.find(".message-container").hasClass("incoming")
        ).toBeTruthy();

        expect(
          wrapper.find(".message-main-area").hasClass("incoming")
        ).toBeTruthy();
        expect(wrapper.find(".message").hasClass("incoming")).toBeFalsy();
      });

      it('should add "incoming" class  to message element', () => {
        const props = {
          isIncoming: true
        };

        const wrapper = shallow(<Message {...props} />);

        expect(
          wrapper.find(".message-container").hasClass("incoming")
        ).toBeFalsy();

        expect(
          wrapper.find(".message-main-area").hasClass("incoming")
        ).toBeFalsy();

        expect(wrapper.find(".message").hasClass("incoming")).toBeTruthy();
        expect(wrapper.find(".author")).toHaveLength(1);
      });
    });
  });

  describe("props rendering", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        isIncoming: true,
        author: "Adrik",
        authorAvatar: "someUrl.com",
        text: "I hate Unit Testing"
      };

      wrapper = shallow(<Message {...props} />);
    });
    it("should render text from props to div with className .message", () => {
      const messageText = wrapper.find(".message").text();

      expect(messageText).toEqual("I hate Unit Testing");
    });

    it("should render author from props to div with className .author", () => {
      const author = wrapper.find(".author").text();

      expect(author).toEqual("Adrik");
    });

    it("should put author avatar url from props to div with className .avatar", () => {
      const avatar = wrapper.find(".avatar");

      expect(avatar.prop("style")).toHaveProperty(
        "backgroundImage",
        "url(someUrl.com)"
      );
    });
  });
});
