import React, { useState } from 'react'

const App = () => {
  const handleClick = () => {
    alert('Subscribed')
  }

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleMouseOver = () => {
    console.log('mouse is over me!');
  };

  return (
    <div>
      <button onClick={handleClick}>Subscribe</button>

      <input type="text" onChange={handleChange} value={value} />
      <p>input: {value}</p>

      <div onMouseOver={handleMouseOver}>hover over this text</div>
    </div>
  )
}

export default App