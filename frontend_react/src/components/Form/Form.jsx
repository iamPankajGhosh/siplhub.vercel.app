import { useState } from "react";
import "./Form.css";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    whatsapp: "",
    college: "",
    semester: "",
    topic: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csvData = Object.values(formData).join(",") + "\n";

    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    // const link = document.createElement("a");
    // link.href = url;
    // link.setAttribute("download", "registration_data.csv");
    // document.getElementById("download").appendChild(link);
    // link.click();

    // URL.revokeObjectURL(url);
    // document.getElementById("download").removeChild(link);

    resetForm();
  };

  const [successMsg, setSuccessMsg] = useState(false);
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      contact: "",
      whatsapp: "",
      college: "",
      semester: "",
      topic: "",
    });

    setSuccessMsg(true);

    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
        required
        className="contact-field"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your mail"
        required
        className="contact-field"
      />

      <input
        type="tel"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Enter your contact number"
        required
        className="contact-field"
      />

      <input
        type="tel"
        name="whatsapp"
        value={formData.whatsapp}
        onChange={handleChange}
        placeholder="Enter your whatsapp number"
        required
        className="contact-field"
      />

      <input
        type="text"
        name="college"
        value={formData.college}
        onChange={handleChange}
        placeholder="Enter your college"
        required
        className="contact-field"
      />

      <input
        type="text"
        name="semester"
        value={formData.semester}
        onChange={handleChange}
        placeholder="Enter your semester"
        required
        className="contact-field"
      />

      <input
        type="text"
        name="topic"
        value={formData.topic}
        onChange={handleChange}
        placeholder="Enter your topic"
        required
        className="contact-field"
      />

      <button type="submit" className="btn btn-secondary has-before has-after">
        <span className="span">Register</span>

        <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
      </button>

      {successMsg && (
        <div className="alert alert-success" role="alert">
          <ion-icon name="checkmark-circle-outline"></ion-icon>
          <span className="span">Registration Complete</span>
        </div>
      )}
    </form>
  );
}

export default Form;
