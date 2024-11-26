// struktur dasar function component
const GreetingFunction = (props) => {
//   const style = { fontSize: "60px" };
// menggunakan props (properti)
  return <h1 className="text-3xl font-bold font-sans text-center">Hello, {props.name}</h1>;
};

export default GreetingFunction;
