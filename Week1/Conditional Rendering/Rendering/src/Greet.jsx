// import React from 'react'

// const greet = (props) => {

//     // if(props.isLoged){
//     //     return <h2>Welcome {props.username}</h2>
//     //   }
//     //     return <h2>Please Login</h2>
//     return (props.isLoged ? <h2 className='welcome'>Welcome {props.username}</h2>: <h2 className='login'>Please Login</h2>)
// }




// // function App() {
// //     const isLoggedIn = true;
  
// //     if (isLoggedIn) {
// //       return <h1>Welcome back!</h1>;
// //     } else {
// //       return <h1>Please log in.</h1>;
// //     }
// //   }
  

// export default greet

import React, { useState } from 'react'

const App = () => {
  const [isLoged,setLog] = useState(false);
  return (
    <div>
      {isLoged?(
        <h2>welcome back</h2>
      ):(
        <h2>Please Log In</h2>
      )}
      <button onClick={()=>setLog(!isLoged)}>click</button>
    </div>
  )
}

export default App
