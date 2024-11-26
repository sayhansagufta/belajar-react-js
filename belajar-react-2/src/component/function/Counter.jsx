import { useState } from "react";
import { Button } from "@nextui-org/react";

// menggunakan state dengan hook useState

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <Button color="primary" onClick={() => setCount(count + 1)}>
        Tambah
      </Button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
    </div>
  );
};

export default Counter;
