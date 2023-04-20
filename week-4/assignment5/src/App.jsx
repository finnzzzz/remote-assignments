import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [childCount, setChildCount] = useState(0);
  function allIncrease() {
    setChildCount(childCount + 1);
  }

  function stateToZero() {
    setChildCount(0);
  }

  const [counterArr, setCounterArr] = useState([]);
  function addArr() {
    setCounterArr(pre => [...pre, pre.length]);
  }
  return (
    <>
      <button onClick={allIncrease}>All + 1</button>
      <Counter childCount={childCount} stateToZero={stateToZero} />
      <Counter childCount={childCount} stateToZero={stateToZero} />
      <Counter childCount={childCount} stateToZero={stateToZero} />
      {counterArr.map(item => (
        <Counter childCount={childCount} stateToZero={stateToZero} key={item} />
      ))}
      <button onClick={addArr}>Add a Counter</button>
    </>
  );
}

export default App;
