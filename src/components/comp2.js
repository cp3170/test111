import React, { Component } from "react";

export class Comp2 extends Component {
  state = { num: 1 };
  xx = 0;
  handleChange = e => this.setState({ num: e.target.value });
  //handleChange = even => xx
  handleClick = e => alert(e.target.value);

  styles = {
    width: 80,
    fontSize: 20,
    borderRadius: 10
  };
  stopStyleActive = {
    fontSize: 25,

    color: "white",
    borderRadius: 10,
    width: 80,
    backgroundColor: "red"
  };

  slowStyleActive = {
    fontSize: 25,
    backgroundColor: "orange",
    color: "white",
    borderRadius: 10,
    width: 80
  };

  goStyleActive = {
    fontSize: 25,
    backgroundColor: "green",
    color: "white",
    borderRadius: 10,
    width: 80
  };

  inputStyle = {
    borderRadius: 10,
    borderBlockColor: "black",
    fontSize: 12,
    margin: 60,
    width: 50
  };

  render() {
    return (
      <React.Fragment>
        <input
          style={this.inputStyle}
          type="text"
          value={this.state.num}
          name="dd"
          onChange={this.handleChange}
        />

        <div style={{ marginLeft: 100 }}>
          <button
            style={
              parseInt(this.state.num) === 0
                ? this.stopStyleActive
                : this.styles
            }
          >
            Stop
          </button>
          <br />
          <button
            style={
              parseInt(this.state.num) === 1
                ? this.slowStyleActive
                : this.styles
            }
          >
            Slow
          </button>
          <br />
          <button
            style={
              parseInt(this.state.num) === 2 ? this.goStyleActive : this.styles
            }
          >
            Go
          </button>
        </div>
      </React.Fragment>
    );
  }
}
