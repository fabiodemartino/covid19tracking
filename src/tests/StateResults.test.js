import React from "react";
import ReactDom from "react-dom";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StatesResults from "../components/StatesResults";

Enzyme.configure({ adapter: new Adapter() });

describe("StateResults", () => {
  it("Renders without crashing", () => {
    const mockState = { stateSelection: "ALL" };
    const div = document.createElement("div");
    ReactDom.render(<StatesResults onStateSelected={mockState} />, div);
  });
});
describe("State results components", () => {
  const mockState = { stateSelection: "ALL" };
  test("renders", () => {
    const wrapper = shallow(<StatesResults onStateSelected={mockState} />);
    expect(wrapper.exists()).toBe(true);
  });
});
