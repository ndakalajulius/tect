import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Simple, Transparent Pricing</h2>
        <p className="pricing-subtitle">Choose a plan that suits your business stage.</p>

        <div className="pricing-cards">
          {/* Basic Plan */}
          <div className="pricing-card">
            <h3 className="card-title">Basic</h3>
            <p className="card-price">$100</p>
            <ul className="card-features">
              <li>✔ 1 Website</li>
              <li>✔ Basic Support</li>
              <li>✔ 1-Week Delivery</li>
            </ul>
            <a href="/contact" className="card-button">Get Started</a>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card featured">
            <h3 className="card-title">Pro</h3>
            <p className="card-price">$300</p>
            <ul className="card-features">
              <li>✔ Up to 3 Projects</li>
              <li>✔ Priority Support</li>
              <li>✔ UI/UX + Backend</li>
            </ul>
            <a href="/contact" className="card-button">Choose Pro</a>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card">
            <h3 className="card-title">Enterprise</h3>
            <p className="card-price">Custom</p>
            <ul className="card-features">
              <li>✔ Full Custom Solutions</li>
              <li>✔ Dedicated Team</li>
              <li>✔ SLA + NDA Support</li>
            </ul>
            <a href="/contact" className="card-button">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;

