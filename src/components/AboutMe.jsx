function AboutMe() {
  return (
    <section className="about-section">
      <div className="section-title-container">
        <h2 className="section-title">ABOUT ME</h2>
      </div>

      <div className="about-content">
        <p className="about-text">
          Hello! I’m <strong>Nadamuni Vasavi</strong>, a passionate Computer Science Engineering student at 
          <strong> KL University</strong>. I’m deeply interested in <strong>web development</strong>, 
          <strong> cloud computing</strong>, and <strong>DevOps</strong> practices that help bridge the gap 
          between innovation and efficiency.
          <br /><br />
          My journey has led me through projects involving <strong>React</strong>, <strong>Node.js</strong>, 
          and <strong>Firebase</strong> — building sleek, responsive interfaces and exploring automation 
          with modern tools. I enjoy solving complex problems and learning how technology can create 
          meaningful impact.
        </p>

        {/* ⚙️ Technical Skills Card */}
<div className="skills-card">
  <h3>Technical Skills</h3>
  <div className="skill-tags">
    <span className="skill-tag">React</span>
    <span className="skill-tag">Node.js</span>
    <span className="skill-tag">Express</span>
    <span className="skill-tag">MongoDB</span>
    <span className="skill-tag">HTML</span>
    <span className="skill-tag">CSS</span>
    <span className="skill-tag">JavaScript</span>
    <span className="skill-tag">Git</span>
    <span className="skill-tag">GitHub</span>
    <span className="skill-tag">Firebase</span>
    <span className="skill-tag">C++</span>
    <span className="skill-tag">DSA</span>
    <span className="skill-tag">Jenkins</span>
    <span className="skill-tag">Kubernetes</span>
    <span className="skill-tag">Helm</span>
    <span className="skill-tag">Ingress</span>
    <span className="skill-tag">Ansible</span>
  </div>
</div>


        {/* 🌩️ Leadership Card */}
        <div className="leadership-card glass-card">
          <h3>Technical Director — MEGHA Club</h3>
          <p><strong>Focus:</strong> Cloud Computing & DevOps</p>
          <p>
            Leading technical initiatives for <strong>MEGHA</strong>, a student-led cloud computing club at 
            K L University. I organize workshops on <strong>AWS</strong>, <strong>Azure</strong>, and 
            <strong> DevOps</strong> tools, mentor peers on projects, and promote hands-on cloud learning.
          </p>
          <div className="leadership-tags">
            <span className="skill-tag">AWS</span>
            <span className="skill-tag">Azure</span>
            <span className="skill-tag">DevOps</span>
            <span className="skill-tag">Leadership</span>
          </div>
        </div>

        {/* 🧭 Club Journey Flowchart */}
        <div className="journey-section">
  <h3>My Journey in MEGHA Club</h3>
  <div className="journey-line">
    <div className="journey-step">
      <h4>Design & Drafting Member</h4>
      <p>Selected from 15 members through a poster making competition...</p>
    </div>

    <div className="journey-step">
      <h4>Technical Member</h4>
      <p>Promoted for consistent contributions to technical projects...</p>
    </div>

    <div className="journey-step">
      <h4>Technical Director</h4>
      <p>Currently leading the technical initiatives of the club...</p>
    </div>
  </div>
</div>


        
      </div>
    </section>
  );
}

export default AboutMe;
