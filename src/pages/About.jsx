import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-tagline">
          At <strong>Tectonic</strong>, we’re more than developers — we’re digital partners. Our team brings together strategy, creativity, and engineering to build powerful, scalable software.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              To empower businesses by delivering tailored software solutions that drive growth, simplify operations, and delight users.
            </p>

            <h3>What We Do</h3>
            <p>
              We specialize in full-cycle product development — from concept to deployment. Whether it's a sleek mobile app or a complex web platform, we craft products that perform and scale.
            </p>

            <h3>Why Work With Us</h3>
            <ul className="about-list">
              <li>User-focused design and intuitive interfaces</li>
              <li>Robust, scalable frontend and backend systems</li>
              <li>Transparent, agile communication and workflows</li>
              <li>On-time delivery backed by reliable support</li>
            </ul>
          </div>

          <div className="about-image">
            <img src="/assets/team.jpg" alt="Tectonic development team" loading="lazy" />
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default About;
