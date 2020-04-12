import React from "react";
import ReactDom from "react-dom";
import Footer from "../components/Footer";

describe("Footer", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Footer />, div);
  });
});
