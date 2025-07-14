import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/' element = {<About/>}/>
        <Route path='/' element = {<Product/>}/>
        <Route path='/' element = {<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
