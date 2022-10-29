import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  return (
    <nav>
      <div className="brand">
        <Link to="/"><h1>CA</h1></Link>
      </div>
        <div className="links">
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
        </div>
    </nav>
  )
}
