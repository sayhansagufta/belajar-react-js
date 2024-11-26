// belajar menggunakan event handling dengan Class
import React from "react";

class ButtonHandleClick extends React.Component {
  handleClick = () => {
    alert("Button Clicked!");
  };

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}

export default ButtonHandleClick;
