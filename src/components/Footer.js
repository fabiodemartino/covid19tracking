import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="row">
        <div className="jumbotron col-12">
          <p className="text-muted credit">
            Covid19 tracking information provided by the WHO via
            covidtracking.com APIs{" "}
          </p>
        </div>
      </div>
    );
  }
}
export default Footer;
