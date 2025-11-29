import React from 'react';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Baseball Score Board",
      description: "A frontend based application to practice javascript.",
      tags: ["HTML", "CSS", "JavaScript", "2025"]
    },
    {
      id: 2,
      title: "Cake API",
      description: "CRUD-based API for managing bakery data, deployed using Jenkins, Docker, and AWS EC2.",
      tags: ["Java", "DevOps", "AWS", "2025"]
    },
    {
      id: 3,
      title: "Shoe API",
      description: "CRUD-based API for managing bakery data, deployed using Jenkins.",
      tags: ["Java", "DevOps", "2025"]
    },
    {
      id: 4,
      title: "Skill Tracker",
      description: "A MERN stack application to track and manage skills.",
      tags: ["MERN", "2025"],
    },
    {
      id: 5,
      title: "Python Compiler",
      description: "A python compiler built using html, css and javascript.",
      tags: ["HTML", "CSS", "JavaScript", "Python", "2025"]
    }
  ];

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">PROJECTS</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card glass-card">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
