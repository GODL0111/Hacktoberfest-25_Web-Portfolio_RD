import React from 'react'

const sampleProjects = [
  {
    id: 1,
    title: 'Song Virality Prediction',
    description:
      'Built a machine learning model to predict whether a song will go viral using audio features (danceability, energy, valence, tempo) from Spotify datasets. Implemented Logistic Regression, Random Forest, and XGBoost. Evaluated using Accuracy, Precision, Recall, and ROC-AUC.',
    tech: 'Python, Scikit-learn, Pandas, Matplotlib',
    link: 'https://github.com/rachayitadebnath'
  },
  {
    id: 2,
    title: 'WanderConnect (Solo Traveler Assistant)',
    description:
      'Travel companion app that provides real-time weather, safety insights, and local details. Integrated OpenWeather API and Google Places API. Designed a dashboard to recommend best travel times and accommodations.',
    tech: 'Django/Node.js, React Native, APIs, PostgreSQL',
    link: 'https://github.com/rachayitadebnath'
  },
  {
    id: 3,
    title: 'Hospital Management System',
    description:
      'Database-driven system to store and manage hospital records including patients, doctors, and appointments. Implemented CRUD operations with focus on data consistency, validation, and retrieval efficiency.',
    tech: 'Python, SQL',
    link: 'https://github.com/rachayitadebnath'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {sampleProjects.map((p) => (
            <article key={p.id} className="card">
              <div className="card-media">
                <img src="/public/placeholder.svg" alt={`${p.title} screenshot`} />
              </div>
              <div className="card-body">
                <h3>{p.title}</h3>
                <p className="muted">{p.tech}</p>
                <p>{p.description}</p>
                <p>
                  <a className="link" href={p.link} target="_blank" rel="noreferrer">View</a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
