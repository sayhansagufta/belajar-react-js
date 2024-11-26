// lifecycle methods dalam class components
import React from "react";

class TimerMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 }; // inisialisasi state
  }

  // membuat componentDidMount untuk Timer
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  }

  // membuat componentWillUnmount untuk menghapus timer
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h1>Seconds : {this.state.seconds}</h1>;
  }
}

export default TimerMethods;
