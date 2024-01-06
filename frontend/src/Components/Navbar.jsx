import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
        <h1>GameBlog</h1>
        <div className="links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/post">Post</Link>
        </div>
    </nav>
  )
}

export default Navbar