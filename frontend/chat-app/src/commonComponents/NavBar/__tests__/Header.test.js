import React from "react";
import { createShallow } from "@material-ui/core/test-utils";
import Header from "../Header";

describe("Header UI testing", () => {
  const props = {
    chatName: "Test Name",
    userProfile: {
      userName: "Adrik",
      onHandleLogout: () => console.log(1)
    }
  };

  const shallow = createShallow();

  test("Header should render correctly", () => {
    const wrapper = shallow(<Header {...props} />);
    console.log(wrapper);
  });
});
