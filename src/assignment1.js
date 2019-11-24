import React, { Component } from "react";
class Assignment1 extends Component {
  state = {
    total: 0,
    item1: 0,
    item2: 0,
    item3: 0
  };
  handleInc = item => {
    this.setState({ [item]: this.state[item] + 1 }); // this.state["item1"]
  };
  handleDec = item => {
    if (this.state[item] > 0) this.setState({ [item]: this.state[item] - 1 });
  };

  findTotal = () => {
    let total =
      this.state.item1 * 5 + this.state.item2 * 10 + this.state.item3 * 15;
    this.setState({ total: total });
  };
  reset = () => {
    this.setState({ item1: 0 });
    this.setState({ item2: 0 });
    this.setState({ item3: 0 });
    this.setState({ total: 0 });
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: 50 }}>
          <span
            style={{
              color: "white",
              backgroundColor: "blue",
              fontSize: 18,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            {this.state.item1 === 0 ? "Zero" : this.state.item1}
          </span>
          <span
            style={{
              color: "white",
              backgroundColor: "blue",
              margin: 20,
              fontSize: 18,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            Item One : QR 5
          </span>

          <span
            style={{
              backgroundColor: "lightgreen",
              fontSize: 18,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            {this.state.item2 === 0 ? "Zero" : this.state.item2}
          </span>
          <span
            style={{
              backgroundColor: "lightgreen",
              margin: 20,
              fontSize: 18,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            Item Two : QR 10
          </span>
          <span
            style={{
              color: "white",
              backgroundColor: "darkred",
              fontSize: 18,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            {this.state.item3 === 0 ? "Zero" : this.state.item3}
          </span>
          <span
            style={{
              color: "white",
              backgroundColor: "darkred",
              margin: 20,
              fontSize: 18,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            Item Three : QR 15
          </span>
          <br />
          <button
            style={{ width: 50, fontSize: 18, margin: 15, marginLeft: 20 }}
            onClick={() => this.handleInc("item1")}
          >
            +
          </button>
          <button
            style={{ width: 50, fontSize: 18, margin: 15 }}
            onClick={() => this.handleDec("item1")}
          >
            -
          </button>

          <button
            style={{ width: 50, fontSize: 18, margin: 15, marginLeft: 110 }}
            onClick={() => this.handleInc("item2")}
          >
            +
          </button>
          <button
            style={{ width: 50, fontSize: 18, margin: 15 }}
            onClick={() => this.handleDec("item2")}
          >
            -
          </button>
          <button
            style={{ width: 50, fontSize: 18, margin: 15, marginLeft: 100 }}
            onClick={() => this.handleInc("item3")}
          >
            +
          </button>
          <button
            style={{ width: 50, fontSize: 18, margin: 15 }}
            onClick={() => this.handleDec("item3")}
          >
            -
          </button>
          <br />
          <button
            style={{ fontSize: 22, margin: 50, marginLeft: 50 }}
            onClick={this.reset}
          >
            Reset
          </button>
          <button
            style={{ fontSize: 22, margin: 100 }}
            onClick={this.findTotal}
          >
            Total
          </button>
          <span style={{ marginLeft: 15 }}>QR {this.state.total}</span>
        </div>
      </React.Fragment>
    );
  }
}

export default Assignment1;
