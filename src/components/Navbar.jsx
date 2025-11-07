import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div>NADAMUNI VASAVI</div>
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/projects">PROJECTS</Link></li>
        <li><Link to="/about">ABOUT ME</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
        <li><Link to="/internships">INTERNSHIPS</Link></li>
      </ul>
      <div className="location">Visakhapatnam, India</div>
    </nav>
  );
}

export default Navbar;
