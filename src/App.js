import React from "react";
import Product from "./components/product";
import Image from "./components/1.png";
export default class App extends React.Component {
  state = {
    flag: true,
    phones: [
      { id: 1, kind: "Iphone 6s", price: 500, amount: 0 },
      { id: 2, kind: "Iphone 8", price: 1000, amount: 0 },
      { id: 3, kind: "Iphone 10", price: 2000, amount: 0 },
      { id: 4, kind: "Iphone 11", price: 3000, amount: 0 }
    ],

    randomArr: Array.from({ length: 8 }).map(() =>
      Math.floor(Math.random() * 8 + 2)
    )
  };
  pics2 = [
    "chicken.png",
    "crab.png",
    "dolphin.png",
    "horse.png",
    "gold-fish.png",
    "octopus.png",
    "rabbit.png",
    "turtle.png"
  ];
  pics = [
    "chicken.png",
    "crab.png",
    "dolphin.png",
    "horse.png",
    "gold-fish.png",
    "octopus.png",
    "rabbit.png",
    "turtle.png"
  ];

  hadleReset = () => {
    let phones = this.state.phones.map(x => {
      x.amount = 0;
      return x;
    });

    this.setState({ phones });
  };

  handleInc = index => {
    // console.log("index = ", index);
    // const temp = [...this.state.phones];
    // temp[index].amount++;
    // console.log("state =", this.state.phones[0].amount);
    // this.setState({ phones: temp });

    this.setState(state => {
      const list = state.phones.map((item, j) => {
        if (index === j) return item.amount++;
        else return item.amount;
      });
      return list;
    });
  };

  shuffle = () => {
    let i = this.pics.length;

    while (i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = this.pics[i];
      this.pics[i] = this.pics[j];
      this.pics[j] = temp;
    }
    this.pics = [...this.pics2];
    this.setState({ flag: !this.state.flag });
  };

  handelDel = index => {
    let temp = this.state.phones.filter(item => item.id !== index);
    this.setState({ phones: temp });
  };

  handleHide = i => {
    this.state.flag
      ? (this.pics[i] = "question.jpeg")
      : (this.pics[i] = this.pics2[i]);
    this.setState({ flag: !this.state.flag });
  };
  render() {
    let total = this.state.phones.reduce(
      (acc, curr) => curr.amount * curr.price + acc,
      0
    );
    return (
      <React.Fragment>
        <img src={Image} />
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
        <button onClick={this.hadleReset}>Reset</button>
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
        {this.state.randomArr.map((x, i) => (
          <h1>{`i= ${i} x= ${x}`}</h1>
        ))}

        {this.pics.map((x, i) => (
          <img
            style={{ width: 200 }}
            src={`./images/${x}`}
            onClick={() => this.handleHide(i)}
          />
        ))}
        <button onClick={this.shuffle}>
          <h3>Play again</h3>
        </button>
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
