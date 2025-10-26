import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand">Rachayita Debnath</div>
        <nav className={open ? 'open' : ''}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  )
}
