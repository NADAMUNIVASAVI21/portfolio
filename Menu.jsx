

import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        <div className='wholemenu'>
            <video autoPlay loop muted id="bg--video">
                <source src="/menu.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="self-summary" style={{ fontSize: '2em' }}>

                <h2>RESUME</h2>
                
                <div className="button-container">
              <button className="custom-button"><a className="hire-me-link" href="/resume_nv.pdf">Download Resume</a></button>
            </div>
            </div>
        </div>
    );
};

export default Menu;
