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

  renderData() {
    let listItems = this.state.results;
    if (this.props.onStateSelected.stateSelection !== "ALL") {
      listItems = listItems.filter(
        (e) => e.state === this.props.onStateSelected.stateSelection
      );
    }

    listItems = listItems.map((d) => <li key={d.state}>{d.state}</li>);

    return <div>{listItems}</div>;
  }
  render() {
    return (
      <div className="row results">
        <div> {this.renderData()}</div>
      </div>
    );
  }
}
export default StatesResults;
