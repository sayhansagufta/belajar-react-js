// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Greeting from "./components/Greeting";
import GreetingFunction from "./component/GreetingFunction";

import "./App.css";
// import { useState } from "react";
import Counter from "./component/Counter";
import Timer from "./component/Timer";
import Button from "./component/EventHandling";
import Counter2 from "./component/Counter2";
// import { Button } from "@nextui-org/react";

function App() {
  // useState
  // const [count, setCount] = useState(0);
  // const [count, setCount] = useState(0);
  // const isLoggedIn = false;

  return (
    <>
      <Counter2 />
      {/* <GreetingFunction name="Shayhan Sagufta" />
      <h1>{isLoggedIn ? "Welcome!" : "Please log in."}</h1>
      <Timer />
      <Button />
      <Counter /> */}

      {/* <Button color="default">Default</Button> */}
      {/* <Button color="primary">Button</Button> */}
      {/* <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Tambah</button>
      </div> */}
      {/* <Greeting name="Shayhan Sagufta" /> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
