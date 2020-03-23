import React from "react";
import { mount } from "enzyme";
import ChatMembers from "../ChatMembers";

describe("Chat Members UI Testing", () => {
  it("should renders without errors", () => {
    mount(<ChatMembers />);
  });

  it("should not break if members array is empty", () => {
    const wrapper = mount(<ChatMembers members={[]} />);
    const members = wrapper.find(".member");

    expect(members).toHaveLength(0);
  });

  it("should contain member with class current", () => {
    const expectedProps = {
      members: [{ _id: "123", avatar: "url", userName: "Adrik" }],
      currentUserId: "123",
      creatorId: "123"
    };
    const wrapper = mount(<ChatMembers {...expectedProps} />);
    const currentMember = wrapper.find(".current");

    expect(currentMember).toHaveLength(1);
  });

  it("should NOT contain member with class current", () => {
    const expectedProps = {
      members: [{ _id: "123", avatar: "url", userName: "Adrik" }],
      currentUserId: "1232",
      creatorId: "123"
    };
    const wrapper = mount(<ChatMembers {...expectedProps} />);
    const currentMember = wrapper.find(".current");

    expect(currentMember).toHaveLength(0);
  });
});
