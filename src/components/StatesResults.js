import React from "react";

class StatesResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    fetch("https://covidtracking.com/api/states")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ results: data });
      })
      .catch(console.log);
  }

  renderResult() {
    let listItems = this.state.results;
    if (this.props.onStateSelected.stateSelection !== "ALL") {
      listItems = listItems.filter(
        (e) => e.state === this.props.onStateSelected.stateSelection
      );
    }

    listItems.sort((a, b) => a.state.localeCompare(b.state));

    let cards = listItems.map((d) => (
      <div className="card-header" key={d.state}>
        <div className="card-body">
          <h5 className="card-title">State: {d.state}</h5>
          <p className="card-text">Positives: {d.positive}</p>
          <p className="card-text">Negatives: {d.negative}</p>
          <p className="card-text">
            Recovered: {typeof d.recovered === "number" ? d.recovered : 0}
          </p>
          <p className="card-text">Deaths: {d.death}</p>
          <p className="card-text">Hospitalized: {d.hospitalized}</p>
          <p className="card-text">
            On Ventilator:{" "}
            {typeof d.onVentilatorCurrently === "number"
              ? d.onVentilatorCurrently
              : 0}
          </p>
          <p className="card-text">Total Test Results: {d.totalTestResults}</p>
        </div>
      </div>
    ));

    return <div>{cards}</div>;
  }
  render() {
    return this.renderResult();
  }
}
export default StatesResults;
