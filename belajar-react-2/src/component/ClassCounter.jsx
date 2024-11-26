import React from "react";
// class counter state dengan jsx
class CounterState extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // inisialisasi state
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return(
        <div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.increment}>Increment</button>
        </div>
    )
  }

}

export default CounterState;
