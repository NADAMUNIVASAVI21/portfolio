import React from "react";

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">LET'S CONNECT</h2>
        </div>

        <div className="contact-content">
          <p className="contact-intro">
            Have a project in mind or just want to say hello?  
            Feel free to reach out — I’d love to collaborate or chat about technology!
          </p>

          <div className="contact-methods">
            <a
              href="mailto:vasavinadamuni0@gmail.com"
              className="contact-item glass-card"
            >
              <div className="contact-icon">✉</div>
              <div className="contact-text">
                <h3>EMAIL</h3>
                <p>vasavinadamuni0@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/nadamunivasavi21"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item glass-card"
            >
              <div className="contact-icon">💼</div>
              <div className="contact-text">
                <h3>LINKEDIN</h3>
                <p>linkedin.com/in/nadamunivasavi21</p>
              </div>
            </a>

            <a
              href="https://github.com/NADAMUNIVASAVI21"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item glass-card"
            >
              <div className="contact-icon">💻</div>
              <div className="contact-text">
                <h3>GITHUB</h3>
                <p>github.com/NADAMUNIVASAVI21</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
