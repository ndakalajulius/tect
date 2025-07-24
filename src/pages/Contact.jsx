import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import {
  FaTiktok,
  FaEnvelope,
  FaInstagram,
  FaFacebook
} from "react-icons/fa";

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
          formRef.current.reset();
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
  <a
    href="https://www.tiktok.com/@techtonic157?_t=ZM-8yHTfYpxK3Z&_r=1"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTiktok /> TikTok
  </a>
  <a
    href="mailto:techtonic254@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaEnvelope /> Email
  </a>
  <a
    href="https://www.instagram.com/techtonicke/profilecard/?igsh=MTEyNndveXY5bTRwdA=="
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram /> Instagram
  </a>
  <a
    href="https://www.facebook.com/share/1AtEVuugFL/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebook /> Facebook
  </a>
</div>

      </div>
    </section>
  );
}

export default Contact;
