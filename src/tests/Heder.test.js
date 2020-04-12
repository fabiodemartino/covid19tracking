import React from "react";
import ReactDom from "react-dom";
import Header from "../components/Header";

describe("Header", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Header />, div);
  });
});
