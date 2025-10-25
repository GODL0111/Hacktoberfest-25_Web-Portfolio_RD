import React from 'react'

const skills = [
  'Java',
  'Python',
  'SQL',
  'React.js',
  'Django',
  'Git & GitHub',
  'Data Structures & Algorithms',
  'OOPS',
  'Data Science',
  'Cloud Fundamentals',
+  'Testing',
+  'Problem Solving',
+  'Communication',
+  'Excel'
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills & Interests</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <span key={s} className="skill-chip">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
