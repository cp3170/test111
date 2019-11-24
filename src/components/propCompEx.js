import React, { Component } from "react";

export default class PropCompEx extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <h1 style={this.props.s}>Hello, {this.props.name}</h1>
        {this.props.num.reduce((x, y) => x + y)}
        <button>Click me</button>
      </React.Fragment>
    );
  }
}
