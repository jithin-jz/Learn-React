import React, { useState } from 'react';

// Without React.memo

// const Child = ({ name }) => {
//   console.log('Child rendered');
//   return <h2>Hello, {name}</h2>;
// };

const Child = React.memo(({ name }) => {
  console.log('Child rendered');
  return <h2>Hello, {name}</h2>;
});

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Jithin" />
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
};

export default App;
