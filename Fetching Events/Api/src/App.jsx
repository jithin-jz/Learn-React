import React, { useState } from 'react'

const App = () => {
  const [user,setUser] = useState(null)

  const fetchUser = async () => {
    try{
      const api = await fetch('https://jsonplaceholder.typicode.com/users/1')
      const data = await api.json()
      setUser(data)
    } catch(e){
      console.error(e)
    }
  } 
  return (
    <div>
      <button onClick={fetchUser}>fetch</button>
      {user && (
        <h1>{user.name}</h1>
      )}
    </div>
  )
}

export default App
