import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1>Rachayita Debnath</h1>
          <p className="tagline">Computer Science Undergraduate • Problem Solver • Aspiring Software Professional</p>
          <p className="bio">I am a motivated Computer Science undergraduate with a strong foundation in programming, problem-solving, and database management. Familiar with Data Structures, Algorithms, and OOP. Eager to learn new technologies and contribute to real-world projects.</p>
          <div className="cta-row">
            <a className="btn" href="#projects">View projects</a>
            <a className="btn btn-ghost" href="mailto:rdebnath8961@gmail.com">Contact</a>
            <a className="btn btn-outline" href="https://github.com/rachayitadebnath" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn btn-outline" href="https://www.linkedin.com/in/rachayita-debnath-73a609311" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero-art">
          <img src="/profile.jpg" alt="Rachayita Debnath" />
        </div>
      </div>
    </section>
  )
}
