import React from "react";
import ReactDom from "react-dom";
import StatesResults from "../components/StatesResults";

describe("StateResults", () => {
  it("Renders without crashing", () => {
    const mockState = { stateSelection: "ALL" };
    const div = document.createElement("div");
    ReactDom.render(<StatesResults onStateSelected={mockState} />, div);
  });
});
