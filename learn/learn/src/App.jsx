// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)

//   const inc = () => setCount(prev=>prev+1)
//   const dec = () => setCount(prev=>prev-1)
//   const res = () => setCount(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={inc}>+</button>
//       <button onClick={dec}>-</button>
//       <button onClick={res}>$</button>

//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {
//   const [isLog,setLog] = useState(false)
//   return (
//     <div>
//       {isLog?(
//         <h1>weclome</h1>
//       ):(
//         <h1>please login</h1>
//       )}
//       <button onClick={()=>setLog(!isLog)}>click</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useState } from 'react'

// const App = () => {
//   const[data,setData] = useState(null)

//   const fetchData = async () =>{
//     const api = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//     const data = await api.json()
//     setData(data)
//   }
//   useEffect(()=>{

//   },[])
//   return (
//     <div>
//       {data &&(
//         <h1>{data.title}</h1>
//       )}
//       <button onClick={fetchData}>click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const[color,setColor] = useState(false)
//   return (
//     <div style={{background:color?'black':'white',height:'100vh'}}>
//       <button onClick={()=> setColor(!color)}>switch</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const[text,addText] = useState('')
//   return (
//     <div>
//       <input type="text"
//       onChange={(e)=>addText(e.target.value)}
//       />
//       <p>Your Text:{text}</p>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react'

// const App = () => {

//     const[count,setCount] = useState(0)

//     const inc = () => setCount(prev=>prev+1)
//     const dec = () => setCount(prev=>prev-1)
//     const res = () => setCount(0)
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={inc}>+</button>
//       <button onClick={dec}>-</button>
//       <button onClick={res}>Reset</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const[text,setText] = useState(null)
//   return (
//     <div>
//       {text?(
//         <h1>welcome</h1>
//       ):(
//         <h1>login</h1>
//       )}
//       <button onClick={()=> setText(!text)}>click</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const[text,newText] = useState('')
//   return (
//     <div>
//       <input type="text"
//       onChange={(e)=>newText(e.target.value)}
//       />
//       <p>{text}</p>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const[color,setColor] = useState(null)
//   return (
//     <div style={{background:color?'black':'white',height:'100vh'}}>
//       <button onClick={()=>setColor(!color)}>switch</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const[data,setData] = useState(null)

//     const fetchData = async () =>{
//         const api = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const data = await api.json()
//         setData(data)
//     }
//   return (
//     <div>
//       <p>{data && (
//         <h1>{data.title}</h1>
//       )}</p>
//       <button onClick={fetchData}>fetch</button>
//     </div>
//   )
// }

// export default App
