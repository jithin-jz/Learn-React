import React, { useState, useMemo } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Running expensive computation");
    return heavyComputation(count);
  }, [count]);

  return (
    <div>
      <h1>{expensiveValue}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

function heavyComputation(num) {
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i * num;
  }
  return total;
}
