import React from "react";
import ReactDom from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import sinon from "sinon";
import StateSelect from "../components/StateSelect";

Enzyme.configure({ adapter: new Adapter() });

describe("StateSelect", () => {
  it("Renders without crashing", () => {
    const mockState = { stateSelection: "ALL" };
    const div = document.createElement("div");
    ReactDom.render(<StateSelect />, div);
  });
});

describe("State select component", () => {
  test("renders", () => {
    const wrapper = shallow(<StateSelect />);
    expect(wrapper.exists()).toBe(true);
  });
});
