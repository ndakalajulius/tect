import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import "./Contact.css";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "contacts"), form);
      setForm({ name: "", email: "", message: "" });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Let's Connect</h2>
        <p>Got a project in mind? Drop us a message or reach us through social platforms.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </label>
          <label>
            Message
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
            />
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
  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaLinkedin /> LinkedIn
  </a>
  <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <FaTwitter /> X (Twitter)
  </a>
  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
    <FaGithub /> GitHub
  </a>
</div>

     </div></section>
  );
}

export default Contact;
