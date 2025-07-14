import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="login-btn">Login</button>
    </div>
  )
}

export default Navbar
