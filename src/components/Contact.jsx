import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact</h2>
        <p>
          <strong>Email:</strong> <a href="mailto:rdebnath8961@gmail.com">rdebnath8961@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+918961414753">+91 8961414753</a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/rachayita-debnath-73a609311" target="_blank" rel="noreferrer">View profile</a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/rachayitadebnath" target="_blank" rel="noreferrer">https://github.com/rachayitadebnath</a>
        </p>
        <p className="muted">To add a downloadable resume, place a PDF named <code>resume.pdf</code> into the <code>public/</code> folder and I will add a button linking to it.</p>
      </div>
    </section>
  )
}
