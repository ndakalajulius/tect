import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import "./Careers.css";

function Careers() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    file: null,
  });

  const [status, setStatus] = useState("");

  const jobOpenings = [
    { title: "Frontend Developer", location: "Remote", type: "Full-time" },
    { title: "UI/UX Designer", location: "Nairobi", type: "Part-time" },
    { title: "Backend Engineer", location: "Remote", type: "Contract" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      // Upload file to Firebase Storage or just log it (not shown here)

      await addDoc(collection(db, "careers"), {
        name: form.name,
        email: form.email,
        role: form.role,
        submittedAt: serverTimestamp(),
      });

      // Send email notification (EmailJS)
      const emailParams = {
        from_name: form.name,
        from_email: form.email,
        role_applied: form.role,
      };

      await emailjs.send(
        "your_service_id",
        "your_template_id",
        emailParams,
        "your_public_key"
      );

      setForm({ name: "", email: "", role: "", file: null });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      console.error("Submission error:", err);
    }
  };

  return (
    <section className="careers-section">
      <h2>Join Our Team</h2>
      <p>Explore current job openings below and submit your application:</p>

      <div className="job-listings">
        {jobOpenings.map((job, idx) => (
          <div className="job-card" key={idx}>
            <h4>{job.title}</h4>
            <p>{job.location} · {job.type}</p>
          </div>
        ))}
      </div>

      <form className="career-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role you're applying for"
          value={form.role}
          required
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <button type="submit">Apply</button>

        {status === "success" && <p className="success">✅ Application submitted!</p>}
        {status === "error" && <p className="error">❌ Something went wrong.</p>}
        {status === "submitting" && <p className="sending">⏳ Submitting...</p>}
      </form>
    </section>
  );
}

export default Careers;
