import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const bgSpring = useSpring({
    backgroundColor: `rgba(0, 0, 255, ${Math.min(0.1 + count * 0.08, 1)})`, // Ensuring smooth increase
    config: { tension: 200, friction: 30 }, // For Bezier-like animation
  });

  return (
    <animated.div style={bgSpring} className="counter-container">
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </animated.div>
  );
};

export default Counter;
