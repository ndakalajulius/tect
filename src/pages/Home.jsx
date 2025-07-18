import { Link } from "react-router-dom";
import "./Home.css"; // Importing our CSS

function Home() {
  return (
    <section className="home-hero">
      <div className="home-container">
        <h1 className="home-title">Build. Launch. Grow.</h1>
        <p className="home-subtitle">
          At <strong>Tectonic</strong>, we engineer high-performance, scalable software solutions that empower your business.
        </p>
        <Link to="/projects" className="home-btn">
          View Our Work
        </Link>
      </div>
    </section>
  );
}

export default Home;

