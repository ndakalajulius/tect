import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const [status, setStatus] = useState("");
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_97",
        "template_5",
        formRef.current,
        "kDhACZjrSdA7cFpRU"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setStatus("success");
          formRef.current.reset(); // clear form
        },
        (error) => {
          console.log("Error:", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p>Got a project in mind? Drop us a message or reach us through social platforms.</p>

        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="user_name" required />
          </label>
          <label>
            Email
            <input type="email" name="user_email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit">Send Message</button>

          {status === "success" && <p className="success">✅ Message sent!</p>}
          {status === "error" && <p className="error">❌ Failed to send message.</p>}
          {status === "sending" && <p className="sending">⏳ Sending...</p>}
        </form>

        <div className="social-links">
          <p>Or reach us via:</p>
          <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://linkedin.com/in/JuliusNdakala" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://twitter.com/JuliusNdakala/" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> X (Twitter)
          </a>
          <a href="https://github.com/JuliusNdakala" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
