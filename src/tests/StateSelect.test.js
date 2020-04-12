import React from "react";
import ReactDom from "react-dom";
import StateSelect from "../components/StateSelect";

describe("Covid19 Tracking", () => {
  it("Renders without crashing", () => {
    const mockState = { stateSelection: "ALL" };
    const div = document.createElement("div");
    ReactDom.render(<StateSelect />, div);
  });
});
