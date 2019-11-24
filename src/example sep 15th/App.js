import React from "react";
import Product from "./components/product";

export default class App extends React.Component {
  state = {
    phones: [
      { id: 1, kind: "Iphone 6s", price: 500, amount: 0 },
      { id: 2, kind: "Iphone 8", price: 1000, amount: 0 },
      { id: 3, kind: "Iphone 10", price: 2000, amount: 0 },
      { id: 4, kind: "Iphone 11", price: 3000, amount: 0 }
    ],

    num: ["chicken.png", "crab.png", "dolphin.png", "horse.png"],
    randomArr: Array.from({ length: 6 }).map(() =>
      Math.floor(Math.random() * 8 + 2)
    )
  };

  handleInc = index => {
    let temp = [...this.state.phones];
    temp[index].amount++;
    this.setState({ phones: temp });
  };

  handelDel = index => {
    let temp = this.state.phones.filter(item => item.id != index);
    this.setState({ phones: temp });
  };

  render() {
    let total = this.state.phones.reduce(
      (acc, curr) => curr.amount * curr.price + acc,
      0
    );
    return (
      <React.Fragment>
        {this.state.phones.map((item, index) => (
          <Product
            key={index}
            name={item.kind}
            price={item.price}
            onInc={() => this.handleInc(index)}
            onDel={() => this.handelDel(item.id)}
            amount={item.amount}
            id={item.id}
          />
        ))}

        <label style={{ margin: 50, fontSize: 20 }}>Total order:</label>
        <span>{total}</span>

        {this.state.num.map(x => x)}
        <img
          style={{
            width: 50,
            borderWidth: 2,
            borderColor: "black",
            borderStyle: "solid"
          }}
          src="./images/crab.png"
          alt="ddd"
        />
        {this.state.randomArr.map(x => (
          <h1>{x}</h1>
        ))}

        {this.state.num.map((x, i) => (
          <img src={`./images/${x}`} />
        ))}
      </React.Fragment>
    );
  }
  styles1 = {
    borderWidth: 2,
    backgroundColor: "lightpink",
    borderStyle: "solid",
    margin: 10
  };
}
