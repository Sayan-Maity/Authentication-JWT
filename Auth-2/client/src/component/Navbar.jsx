import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{backgroundColor: "#fff", width: "100%"}}>
        <ul>
            <li><Link to="/">Landing Page</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/private">Private</Link></li>
            <li><Link to="/private2">Private2</Link></li>
        </ul>
      
    </div>
  )
}

export default Navbar
