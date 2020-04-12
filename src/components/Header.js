import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="jumbotron col-12">
          <h2>Covid 19 Tracking by State</h2>
          <h5>
            Select a state to determine the current status of the Covid 19
            pandemic for the United States
          </h5>
        </div>
      </div>
    );
  }
}
export default Header;
