import React, { Component } from "react";
import TopSpot from "./topspot";

const axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="my-5 row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">San Diego Top Spots</h1>
                  <p className="card-text">
                    Here's a list of the top 30 spots to visit in San Diego,
                    California
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          {this.state.topspots.map(topspot => (
            <TopSpot
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
            />
          ))}
          {/* <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre> */}
        </div>
      </div>
    );
  }
}

export default App;
