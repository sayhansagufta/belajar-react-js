import { useEffect, useState } from "react";

// lifecycle dengan hook useEffect

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []); // hanya jalan sekali saat komponen dimount

  return <p>Time: {time}s</p>;
};

export default Timer;
