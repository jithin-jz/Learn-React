import React, { useState } from 'react'

const App = () => {

  const [name,setName] = useState('jz');
  const [age,setAge] = useState(0);
  const [place,setPlace] = useState('unknown');
  const [count,setCount] = useState(0);
  const [isEmployed,setEmployed] = useState(false);
  const [job,switchJob] = useState('web developer');
  const [on,off] = useState('💡')
  const [isOn,setIsOn] = useState(true)



  const updateName = () => setName('jithin')
  const updateAge = () => setAge(22)
  const updatePlace = () => setPlace('kozhikode')
  const increment = () => setCount(count+1);
  const decrement = () => setCount(count-1)
  const reset = () => setCount(0)
  const status = () => setEmployed(!isEmployed)
  const switched = () => switchJob(!job)
  const onOff = () => off(!on)
  const toggle = () => setIsOn(p=>!p)
  
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age:{age}</p>
      <button onClick={updateAge}>Change Age</button>

      <p>Place:{place}</p>
      <button onClick={updatePlace}>Update Place</button>

      <p>count{count}</p>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <button onClick={reset}>Reset</button>
      
      <p>Employee Status:{isEmployed?'yes':'no'}</p>
      <button onClick={status}>status</button>

      <p>current job:{job?'web developer':'devops'}</p>
      <button onClick={switched}>switch job</button>
<br />
<br />
      <span>light:{on?'🌝':'🌚'}</span>
      <button onClick={onOff}>change</button>
<br />
<br />
      <button onClick={toggle}>{isOn ? 'ON 🔆' : 'OFF 🌑'}</button>
    </div>
  )
}

export default App
