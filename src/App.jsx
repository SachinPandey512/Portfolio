import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Sachin Pandey</h1>
        <p>Frontend Developer | React Enthusiast</p>
      </header>

      {/* About */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a BCA graduate with a GPA of 68% and currently working as a Web
          Development Intern at Abhiwan Technology. I love creating responsive
          and user-friendly web applications using React.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>API Integration</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Family Tree App:</strong> A family tree with animated layout
            using React and CSS.
          </li>
          <li>
            <strong>Weather App:</strong> Fetches real-time weather data using API.
          </li>
          <li>
            <strong>E-commerce Website:</strong> Includes add to cart, filtering,
            and payment integration.
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="experience">
        <h2>Experience</h2>
        <p>
          <strong>Web Development Intern - Abhiwan Technology</strong><br />
          Working on real-world React projects, collaborating with team, and building responsive web applications.
        </p>
      </section>

      {/* Education */}
      <section className="education">
        <h2>Education</h2>
        <p>Bachelor of Computer Applications (BCA) — 68%</p>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: 2003512sachin@gmail.com</p>
        <p>Phone: 7217672186</p>
        <a href="/resume.pdf" download className="resume-button">Download Resume</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Sachin Pandey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
