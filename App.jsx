import React, { Component } from 'react';
import './App.css';

import Menu from './Menu';
import AboutUs from './AboutUs';
import MyAccount from './MyAccount';

class App extends Component {
  render() {
    return (
      <div id='container'>
        <div id='header'>
          <nav>
            <ul className="nav-options">
              <li><a href="/Menu">Resume</a></li>
              <li><a href="/MyAccount">Skills</a></li>
              <li><a href="/AboutUs">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div id='content'>
          {/* Video Background */}
          <video autoPlay loop muted id="bg-video">
            <source src="/bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-container">
            <h2 style={{ fontSize: '20px' }}>Hello!</h2>
            <h1>
              <span className="light-gray">I'm</span> <span className="white">NADAMUNI <br/>VASAVI</span>
            </h1>
            <div className="button--container">
              <button className="custom--button"><a href="https://www.linkedin.com/in/nadamuni-vasavi-4b0967341/" className='l'>Hire Me</a></button>
              
            </div>
          </div>
        </div>
        <div id='footer'>
          <label>Copyright@2025. All rights reserved.</label>
        </div>
      </div>
    );
  }
}

export default App;
