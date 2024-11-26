import React from "react";

// struktur class Component

class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} !</h1>;
  }
}

export default Greeting;
