import React, { Component } from "react";
class Product extends Component {
  state = { amount: this.props.amount };

  // handleInc = () => this.setState({ amount: this.state.amount + 1 });

  //handleDec = () => this.setState({ amount: this.state.amount - 1 });
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: 50 }}>
          <span style={this.styles}>{this.props.name}</span>
          <span style={this.styles1}>: QR {this.props.price}</span>
          <br />
          <button
            style={{ width: 50, fontSize: 18, margin: 15, marginLeft: 20 }}
            onClick={this.props.onInc}
          >
            +
          </button>
          <span>{this.props.amount}</span>
          <button
            style={{ width: 50, fontSize: 18, margin: 15 }}
            onClick={this.handleDec}
          >
            -
          </button>
          <button
            style={{ width: 50, fontSize: 18, margin: 15 }}
            onClick={this.props.onDel}
          >
            Del
          </button>
        </div>
      </React.Fragment>
    );
  }

  styles = {
    color: "white",
    backgroundColor: "blue",
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  };
  styles1 = {
    backgroundColor: "lightblue",
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10
  };
}

export default Product;
