import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Eganh.dev</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Exprience</a>
            <a href="/">Projects</a>
        </nav>
    </header>
  )
}

export default Navbar
