import React, { Component } from "react";

class Items extends Component {
  state = {
    data: [
      { name: "Ahmad", gender: "male" },

      { name: "Hania", gender: "female" },
      { name: "Hassan", gender: "male" },
      { name: "Fatima", gender: "female" }
    ]
  };
  Styles = {
    maleStyle: { backgroundColor: "lightblue", width: 200 },
    femaleStyle: { backgroundColor: "pink", width: 200 }
  };

  render() {
    let { data } = this.state;
    return (
      <React.Fragment>
        <h1> {this.props.title}</h1>
        {data.length === 0 && <p>There are no names in the list!</p>}
        {data.map(x => (
          <ul>
            <li
              style={
                x.gender === "male"
                  ? this.Styles.maleStyle
                  : this.Styles.femaleStyle
              }
            >
              {x.gender === "male" ? "Mr. " + x.name : "Ms. " + x.name}
            </li>
          </ul>
        ))}
      </React.Fragment>
    );
  }
}

export default Items;
