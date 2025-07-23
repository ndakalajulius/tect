import { Link } from "react-router-dom";
import "./Home.css";
import heroIllustration from "../assets/hero-illustration.png";

function Home() {
  return (
    <section className="home-hero">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Build. Launch. Grow.</h1>
          <p className="home-subtitle">
            At <strong>Tectonic</strong>, we engineer high-performance, scalable software solutions that empower your business.
          </p>
          <Link to="/projects" className="home-btn">
            View Our Work
          </Link>
        </div>
        <div className="home-image">
          <img src={heroIllustration} alt="Software development illustration" />
        </div>
      </div>

      {/* Features Section */}
      <section className="home-features">
        <h2>What We Offer</h2>
        <ul className="feature-list">
          <li>Custom Web Applications</li>
          <li>Scalable Backend Solutions</li>
          <li>UI/UX Design</li>
          <li>Mobile App Development</li>
        </ul>
      </section>
    </section>
  );
}

export default Home;

