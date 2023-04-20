import React, { useState, useEffect } from "react";

export default function Counter({ childCount, stateToZero }) {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(pre => pre + 1);
  }
  useEffect(() => {
    setCount(count + childCount);
    stateToZero();
  }, [childCount]);

  return (
    <div>
      <button onClick={increase}>+1</button>
      <span>-----{count}</span>
    </div>
  );
}
