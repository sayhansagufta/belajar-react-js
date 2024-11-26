import React from "react";

class GreetingClass extends React.Component {
  render() {
    return <h1> Welcome, {this.props.name} !</h1>;
  }
}

export default GreetingClass;
