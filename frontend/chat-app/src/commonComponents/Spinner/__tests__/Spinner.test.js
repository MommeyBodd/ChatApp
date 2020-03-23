import React from "react";
import { Spinner } from "../Spinner";

describe("Renders", () => {
  test("should render correctly", () => {
    const wrapper = shallow(<Spinner />);

    expect(wrapper).toMatchSnapshot();
  });
});
