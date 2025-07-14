import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h3>Double: {double}</h3>
      <button onClick={() => setCount(count + 1)}>Add +1</button>
    </div>
  );
}

export default App; // ✅ export your component
