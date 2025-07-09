// import React from 'react'

// const App = () => {
//   const handleClick = () => {
//     alert('subscriberd')
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>click here</button>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//   const[value,setValue] = useState('')

//   const handleChanges=(e)=>{
//     setValue(e.target.value)
//   }
//   return (
//     <div>
//       <input type="text" name="" id="" onChange={handleChanges} />
//       <p>Text:{value}</p>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'

// const App = () => {
//     const[count,setCount]=useState(0)

//     const max = () =>{
//         setCount(p=>p+1)
//     }
//     const min = () =>{
//         setCount(p=>p-1)
//     }
//     const reset = () =>{
//         setCount(0)
//     }
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={max}>+</button>
//       <button onClick={min}>-</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }

// export default App


// import React, { useRef } from 'react';

// function App() {
//   const inputRef = useRef(null);

//   const focusInput = () => {
//     inputRef.current.focus(); // Direct DOM access
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={focusInput}>Focus Input</button>
//     </div>
//   );
// }
// export default App