import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="jumbotron col-12">
          <h1>Covid 19 Tracking</h1>
          <p>Enter a state to track the covid 19 status</p>
        </div>
      </div>
    );
  }
}
export default Header;
