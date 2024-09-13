import React from "react";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="blog.sinamathew.tech">Blog</a></li>
            <li><a href="3mtt.sinamathew.tech">3MTT</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </nav>
        <h1>Welcome to My Website</h1>
        <p>This page is currently under development. Stay tuned for updates!</p>
      </header>

      <main>
        <section className="development-message">
          <h2>About This Project</h2>
          <p>I am currently building my personal website where I'll showcase my work and share my thoughts. Check back soon!</p>
        </section>
      </main>

      <footer>
        <h3>Contact Me</h3>
        <p>Email: <a href="mailto:hi@sinamathew.tech">hi@sinamathew.tech</a></p>
        <div className="social-links">
          <a href="https://twitter.com/s1namathew" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://github.com/sinamathew" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sinamathew" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
