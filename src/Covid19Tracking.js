import React, { Component } from "react";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import StateSelect from "./components/StateSelect.js";
import StatesResults from "./components/StatesResults.js";

class Covid19Tracking extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stateSelection: "ALL" };
  }

  handleStateChange(stateSelection) {
    this.setState({ stateSelection });
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <div className="form-group">
          <label htmlFor="state" className="col-sm-2 control-label">
            State
          </label>
          <StateSelect onStateChange={this.handleStateChange.bind(this)} />
          <StatesResults onStateSelected={this.state} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Covid19Tracking;
