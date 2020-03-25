import React from "react";
import LoginPage from "../LoginPage";
import { createShallow } from "@material-ui/core/test-utils";
import Button from "@material-ui/core/Button";

describe("Login Page UI testing", () => {
  let shallow;
  let wrapper;

  beforeEach(() => {
    shallow = createShallow();
    wrapper = shallow(<LoginPage />);
  });

  test("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("button should contain correct link", () => {
    const buttonLink = wrapper.find(Button).props().href;

    expect(buttonLink).toEqual("http://localhost:3001/auth/google");
  });
});
