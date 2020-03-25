import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import InviteModal from "../InviteModal";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";

describe("Invite Modal UI testing", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  describe("Renders", () => {
    let mockFunction;
    let wrapper;

    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(init => [init, setState]);

    beforeEach(() => {
      mockFunction = jest.fn();
      const expectedProps = {
        userList: [],
        chatId: "asdasd",
        onSubmit: mockFunction,
        members: []
      };

      wrapper = shallow(<InviteModal {...expectedProps} />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    test("should fire onSubmit function on +Add Member button", () => {
      const addMemberButton = wrapper.find(Button);

      addMemberButton.simulate("click");

      const callback = mockFunction.mock.calls.length;

      expect(callback).toBe(1);
    });

    test("button should be disabled if usersToInvite is empty", () => {
      const addMemberButton = wrapper.find(Button);

      expect(addMemberButton.at(0).prop("disabled")).toBeTruthy();
    });
  });
});
