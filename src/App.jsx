import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Project';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Crafted by Savnee</h1>
          <p>Engineering Student | Dancer | Matcha Enthusiast</p>
        </header>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>

        <section id="socials">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/savnee-puranik/" target="_blank" rel="noopener noreferrer">
              <img src="linkedin-icon.png" alt="LinkedIn" />
            </a>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;

