import React from 'react'

const schools = [
  {
    id: 1,
    degree: 'B.Tech — Information Technology',
    school: 'Techno International New Town',
    date: '2023 – 2026'
  },
  {
    id: 2,
    degree: 'Diploma — Computer Science & Engineering',
    school: 'Sister Nivedita University',
    date: '2020 – 2023'
  }
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2>Education</h2>
        <div className="education-list">
          {schools.map((s) => (
            <div key={s.id} className="edu-item">
              <h3>{s.degree}</h3>
              <p className="muted">{s.school} — {s.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
