import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Tectonic</h3>
          <p>Building modern software for tomorrow’s businesses.</p>
        </div>

        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tectonic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

