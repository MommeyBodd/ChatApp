import React from "react";
import { checkProps } from "../../../../../utils/testUtils";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { createShallow } from "@material-ui/core/test-utils";

import Chat from "../Chat";

describe("Chat UI testing", () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it("button should be disabled if input is empty", () => {
    const wrapper = shallow(<Chat />);
    const button = wrapper.find(Button);

    expect(button.at(1).prop("disabled")).toBeTruthy();
  });
});
