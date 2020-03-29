import * as React from "react";
import CreateChatRoomModal from "../CreateChatRoomModal";
import { createShallow } from "@material-ui/core/test-utils";
import { shallow } from "enzyme";
import Button from "@material-ui/core/Button";

jest.mock("react-redux", () => ({
  useSelector: () => ({
    userProfile: { userName: "", _id: "" }
  }),
  useDispatch: () => ({})
}));

describe("CreateChatRoomModal UI testing", () => {
  let wrapper;

  describe("Open Modal", () => {
    const setOpen = jest.fn();
    const useStateSpy = jest.spyOn(React, "useState");
    useStateSpy.mockImplementation(open => [open, setOpen]);

    beforeEach(() => {
      wrapper = shallow(<CreateChatRoomModal />);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("should set open modal status to true", () => {
      wrapper
        .find(".test-button")
        .props()
        .onClick();

      expect(setOpen).toHaveBeenCalledWith(true);
    });
  });

  describe("disabled button", () => {
    let shallow;

    beforeEach(() => {
      shallow = createShallow();
    });

    it("button should be initially disabled", () => {
      const wrapper = shallow(<CreateChatRoomModal />);
      const buttonDisabledPro = wrapper.find(Button).props().disabled;

      expect(buttonDisabledPro).toEqual(true);
    });
  });
});
