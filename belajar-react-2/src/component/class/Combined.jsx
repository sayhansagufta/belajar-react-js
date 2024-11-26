// menggabungkan state dengan props
import React from "react";

class GreetingsProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: `Hello, ${props.name}` };
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default GreetingsProps;
