// Event Handling 
const Button = () => {
  const handleClick = () => alert("Button Clicked!");

  return <button onClick={handleClick}>Click Me</button>;
};

export default Button;
