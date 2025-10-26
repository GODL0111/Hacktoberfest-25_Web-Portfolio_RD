import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Nav />
        <main>
          <Hero />
          <section className="section about" id="about">
            <div className="container">
              <h2>About</h2>
              <p>
                I am a motivated Computer Science undergraduate with a strong foundation in programming,
                problem-solving, and database management. Familiar with core concepts like Data Structures,
                Algorithms, and Object-Oriented Programming. Eager to learn new technologies and contribute
                to real-world projects in a collaborative environment.
              </p>
            </div>
          </section>

          <Projects />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </main>
        <footer className="footer">© {new Date().getFullYear()} Rachayita Debnath</footer>
      </div>
    </ThemeProvider>
  )
}
