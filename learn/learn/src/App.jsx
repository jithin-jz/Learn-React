import React, { useState } from 'react'

const App = () => {
  const [isLoged,setLog] = useState(false)
  return (
    <div>
      {isLoged?(
        <p>Welocme back</p>
      ):(
        <p>please login</p>
      )}
      <button onClick={()=>setLog(!isLoged)}>click</button>
    </div>
  )
}

export default App
