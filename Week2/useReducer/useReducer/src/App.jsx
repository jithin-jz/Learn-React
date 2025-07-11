import React, { useReducer } from 'react';

const reducer = (state, action) => {
  if (action === 'inc') return state + 1;
  if (action === 'dec') return state - 1;
  if (action === 'reset') return 0;
  return state;
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch('inc')}>+</button>
      <button onClick={() => dispatch('dec')}>-</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  );
};

export default App;
