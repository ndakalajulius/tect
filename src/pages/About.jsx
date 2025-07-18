import "./About.css";

function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-heading">Who We Are</h2>
        <p className="about-tagline">
          At <strong>Tectonic</strong>, we’re not just coding—we’re creating impact. A passionate team of dreamers, doers, and digital architects shaping tomorrow’s tech, today.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>
              To ignite growth through high-impact, tailor-made software that empowers startups, scales businesses, and simplifies lives.
            </p>

            <h3>What We Do</h3>
            <p>
              We craft stunning web and mobile experiences. From seamless UIs to bulletproof backends, our work merges design, performance, and purpose.
            </p>

            <h3>Why Teams Trust Us</h3>
            <ul>
              <li>Human-first, user-obsessed design</li>
              <li>Clear, honest, and agile communication</li>
              <li>Scalable code, built to grow with you</li>
              <li>Timely delivery — and support that sticks</li>
            </ul>
          </div>

          <div className="about-image">
            <img src="/assets/team.jpg" alt="Our Dream Team at Tectonic" loading="lazy" />
          </div>
        </div>

        <div className="about-cta">
          <p>Ready to build your next big thing?</p>
          <a href="/contact" className="about-btn">Let’s Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;

