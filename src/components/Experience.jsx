import React from 'react'

const experiences = [
  {
    id: 1,
    title: 'British Airways — Data Science Simulation',
    date: '2025',
    details: 'Completed Forage simulation focused on data science workflows and practical exercises.'
  },
  {
    id: 2,
    title: 'Tata — Cybersecurity Analyst Simulation',
    date: '2025',
    details: 'Completed Forage cybersecurity analyst simulation with emphasis on threat analysis and defensive practices.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience / Simulations</h2>
        <div className="timeline">
          {experiences.map((e) => (
            <div key={e.id} className="timeline-item">
              <h3>{e.title}</h3>
              <p className="muted">{e.date}</p>
              <p>{e.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
