import React, { useEffect, useState } from 'react'

const App = () => {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    async function fetchUser() {
      const api = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await api.json()
      setUsers(data)
    }
    fetchUser();
  },[]);
  return (
    <div>
      {users.map(m=> <p>{m.name}</p>)}
    </div>
  )
}

export default App