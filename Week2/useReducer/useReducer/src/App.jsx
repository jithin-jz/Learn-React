import React, { useReducer } from 'react'

const reducer = (state,action)=>{
  if(action === 'inc') return state + 1;
  if(action === 'dec') return state - 1;
  if(action === 'reset') return 0;
}

const App = () => {
  const [count,dipatch] = useReducer(reducer,0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dipatch('dec')}>➖</button>
      <button onClick={() => dipatch('inc')}>➕</button>
      <button onClick={() => dipatch('reset')}>🌀</button>
    </div>
  )
}

export default App
