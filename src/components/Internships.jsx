import React from 'react';
import '../App.css';

function Internships() {
  const internships = [
    {
      id: 1,
      title: "AI Azure Internship",
      organization: "Microsoft | Edunet Foundation | AICTE",
      description:
        "Completed a 4-week internship focusing on AI Azure fundamentals, cloud computing, and deployment practices under Microsoft’s initiative.",
      tags: ["AI", "Azure", "Cloud", "2025"],
      certificateLink: "/microsoftedunet.pdf",
    },
    {
  id: 2,
  title: "Python Full Stack Developer Virtual Internship",
  organization: "EduSkills | AICTE | K L University",
  description:
    "Successfully completed a 10-week virtual internship on Python Full Stack Development under EduSkills and AICTE. Gained hands-on experience in building dynamic web applications using Python, Flask, and databases.",
  tags: ["Python", "Full Stack", "EduSkills", "AICTE", "2025"],
  certificateLink: "/pfsdvirtualinternship.pdf",
},

    {
      id: 3,
      title: "Linguaskill English Certification",
      organization: "Cambridge Assessment English",
      description:
        "Assessed for English communication proficiency and achieved CEFR Level B2, demonstrating strong listening, speaking, and writing skills.",
      tags: ["English", "Cambridge", "CEFR-B2", "2024"],
      certificateLink: "/linguaskill.pdf",
    },
    {
      id: 4,
      title: "Social Internship Program",
      organization: "K L University (SAC)",
      description:
        "Contributed to social responsibility projects and was recognized for dedication and service through the KLU Student Activity Center initiative.",
      tags: ["Social Work", "Community", "Leadership", "2024"],
      certificateLink: "/73867286.pdf",
      password: "73867286", // 👈 added password field
    },
    {
      id: 5,
      title: "Web Development using Django Internship",
      organization: "APSSDC | Government of Andhra Pradesh",
      description:
        "Completed a summer online internship on Web Development using Django conducted by Andhra Pradesh State Skill Development Corporation (APSSDC).",
      tags: ["Django", "Python", "Web Dev", "APSSDC", "2025"],
      certificateLink: "/2300032734.pdf",
    },
  ];

  return (
    <section className="internships-section">
      <div className="container">
        <div className="section-title-container">
          <h2 className="section-title">INTERNSHIPS</h2>
        </div>

        <div className="internships-grid">
          {internships.map((internship) => (
            <div key={internship.id} className="internship-card glass-card">
              <div className="internship-info">
                <h3>{internship.title}</h3>
                <p><strong>{internship.organization}</strong></p>
                <p>{internship.description}</p>

                <div className="internship-tags">
                  {internship.tags.map((tag, index) => (
                    <span key={index} className="internship-tag">{tag}</span>
                  ))}
                </div>

                <a
                  href={internship.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate →
                </a>

                {/* 🔒 Password Note */}
                {internship.password && (
                  <p className="password-note">
                    🔒 Password: <strong>{internship.password}</strong>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;
