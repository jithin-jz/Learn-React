import React, { useEffect, useState } from 'react'

const App = () => {
  const [people,newPeople] = useState([])
  
  useEffect(()=>{
    async function getUser() {
      const api = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await api.json()
      newPeople(data)
    }
    getUser()
  },[])
  return (
    <div>
      {people.map(x=><p>{x.name}</p>)}
    </div>
  )
}

export default App
