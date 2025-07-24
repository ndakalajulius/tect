import "./Projects.css"; // Optional if you're using external styles

function Projects() {
  const projectList = [
    {
      name: "E-Commerce Platform",
      image: "/assets/ecommerce.jpg",
      link: "https://example.com/ecommerce",
    },
    {
      name: "Expense Tracker App",
      image: "/assets/expense-tracker.jpg",
      link: "https://example.com/expense-tracker",
    },
    {
      name: "Job Finder Mobile App",
      image: "/assets/job-finder.jpg",
      link: "https://example.com/job-finder",
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
              <img src={project.image} alt={project.name} className="project-image" />
              <h3 className="project-title">{project.name}</h3>
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

