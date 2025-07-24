import "./Projects.css";

function Projects() {
  const projectList = [
    {
      name: "Riziki Foundation",
      description: "Platform for helping the vulnerable in the society.",
      status: "Live",
      tech: ["React", "Firebase"],
      link: "https://rizikifoundation.net/",
    },
    {
      name: "OhanaFamilyWear",
      description: "A full-stack application with cart and checkout features.",
      status: "Live",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://ohanafamilywear.com/",
    },
    {
      name: "Events Hub Kenya",
      description: "A web app where users can add and explore events happening across the country.",
      status: "Live",
      tech: ["Next.js", "Firebase"],
      link: "https://events-hub-kenya.vercel.app/",
    },
    {
      name: "Vedman Capital Limited",
      description: "Investment advisory and portfolio management platform.",
      status: "Live",
      tech: ["React", "Django", "PostgreSQL"],
      link: "https://vedmangroup.com/",
    },
    {
      name: "Book Review App (Briew.com)",
      description: "Upload books, leave reviews, and explore what others are reading.",
      status: "Live",
      tech: ["React", "Firebase", "Tailwind CSS"],
      link: "https://merry-blini-2e67bf.netlify.app/",
    },
    {
      name: "HOMEDECOR",
      description: "Website for real estate listings and property highlights.",
      status: "Live",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://real-estate-website-one-kappa.vercel.app/",
    },
    {
      name: "Spring Field Eye",
      description: "Eye-care system for clinic management and appointments.",
      status: "Live",
      tech: ["React", "Express", "MongoDB"],
      link: "https://spring-field-eye-care-system.vercel.app/",
    },
    {
      name: "SMART | VIEW",
      description: "A clean, professional property management website.",
      status: "Live",
      tech: ["React", "Tailwind", "Supabase"],
      link: "https://property-management-website-coral.vercel.app/",
    },
  ];

  return (
    <section className="section projects-section">
      <div className="projects-header">
        <h2>Our Work Speaks for Itself</h2>
        <p className="projects-subtitle">
          From innovative startups to enterprise platforms, we've crafted scalable solutions that make a difference.
        </p>
      </div>

      <div className="projects-preview">
        <p className="projects-tagline">
          Explore a few highlights from our portfolio — web apps, mobile tools, dashboards, and more.
        </p>

        <div className="project-cards">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-status">
                <strong>Status:</strong> {project.status}
              </p>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span className="tech-badge" key={i}>
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="project-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
