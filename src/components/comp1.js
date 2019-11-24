import React, { Component } from "react";

export class Comp1 extends Component {
  state = { flag: true };

  style1 = {
    marginLeft: 60,
    backgroundColor: "red",
    color: "white",
    fontSize: 20,
    width: 100
  };
  style2 = {
    marginLeft: 60,
    backgroundColor: "green",
    color: "white",
    fontSize: 20,
    width: 100
  };

  render() {
    return (
      <React.Fragment>
        <p style={{ margin: 50 }}>Click this button </p>
        <button
          style={this.state.flag ? this.style1 : this.style2}
          onClick={this.handleClcik}
        >
          {this.state.flag ? "Red" : "Green"}
        </button>
        <br />
      </React.Fragment>
    );
  }

  handleClcik = () => {
    this.setState({ flag: !this.state.flag });
  };
}
