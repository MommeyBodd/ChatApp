import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import ChatRoom from "../ChatRoom";

describe("Chat Room UI testing", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("should not show main content while loading is true ", () => {
    const expectedProps = {
      chatInfo: {
        isLoading: true
      }
    };
    wrapper = shallow(<ChatRoom {...expectedProps} />);

    const chatContainerBlock = wrapper.find(".chat-container");

    expect(chatContainerBlock).toHaveLength(0);
  });

  it("should show main content while loading is false ", () => {
    const expectedProps = {
      chatInfo: {
        isLoading: false
      }
    };
    wrapper = shallow(<ChatRoom {...expectedProps} />);

    const chatContainerBlock = wrapper.find(".chat-container");

    expect(chatContainerBlock).toHaveLength(1);
  });
});
