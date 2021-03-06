import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter(), disableLifecycleMethods: true });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.fetch = require("jest-fetch-mock");
