import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Internships from './components/Internships';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="star star-left"></div>
        <h1>ASPIRING<br/>FULL STACK<br/>DEVELOPER</h1>
        <p className="subtitle">
          Hello! I'm <strong>Nadamuni Vasavi</strong>, a Computer Science Engineering student
          at KL University passionate about building impactful web applications and exploring
          cloud & DevOps technologies.
        </p>
        <div className="star star-right"></div>
      </div>
    </section>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/internships" element={<Internships />} />
      </Routes>
    </Router>
  );
}

export default App;
