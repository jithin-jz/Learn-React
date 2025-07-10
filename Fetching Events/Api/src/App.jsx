// import React, { useState } from 'react'

// const App = () => {
//   const [user,setUser] = useState(null)

//   const fetchUser = async () => {
//     try{
//       const api = await fetch('https://jsonplaceholder.typicode.com/users/1')
//       const data = await api.json()
//       setUser(data)
//     } catch(e){
//       console.error(e)
//     }
//   } 
//   return (
//     <div>
//       <button onClick={fetchUser}>fetch</button>
//       {user && (
//         <h1>{user.name}</h1>
//       )}
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'

const App = () => {
  const [data,setData] = useState(null)

  const fetchData = async () => {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await api.json()
    setData(data)
  }
  return (
    <div>
      <h1>Fetch Data</h1>
      {data && (
        <h2>{data.title}</h2>
      )}

      <button onClick={fetchData}>fetch</button>
      
    </div>
  )
}

export default App
