import React from 'react'

function Header(){
  return <h1>Hello head</h1>
}

function Body(){
  return <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, nihil?</p>
}


const App = () => {
  return (
    <div>
      <Header></Header>
      <Body></Body>
    </div>
  )
}

export default App
