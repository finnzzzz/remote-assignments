import Counter from "./components/Counter_v2";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([0, 0, 0]);

  function addCounter() {
    setCounters([...counters, 0]);
  }

  function allIncrease() {
    const countersCopy = counters.map(value => value + 1);
    setCounters(countersCopy);
  }
  return (
    <>
      <button onClick={allIncrease}>All + 1</button>
      {counters.map((value, index) => (
        <Counter
          value={value}
          increase={() => {
            const countersCopy = [...counters];
            countersCopy[index] += 1;
            setCounters(countersCopy);
          }}
          key={index}
        />
      ))}

      <button onClick={addCounter}>Add a Counter</button>
    </>
  );
}

export default App;
