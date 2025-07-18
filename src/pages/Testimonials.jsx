import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Alice",
      text: "Tectonic transformed our workflow.",
      image: "/assets/testimonials/alice.jpg",
    },
    {
      name: "Bob",
      text: "A reliable and professional dev team.",
      image: "/assets/testimonials/bob.jpg",
    },
    {
      name: "Clara",
      text: "They delivered on time and exceeded expectations!",
      image: "/assets/testimonials/clara.jpg",
    },
  ];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Client Testimonials</h2>
      <div className="testimonial-grid">
        {reviews.map((review, i) => (
          <div key={i} className="testimonial-card">
            <img
              src={review.image}
              alt={review.name}
              className="testimonial-image"
            />
            <p className="testimonial-text">"{review.text}"</p>
            <h4 className="testimonial-name">- {review.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

