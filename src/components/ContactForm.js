// src/components/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

export default function ContactForm({ refresh }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/contacts", form);
    setForm({ name: "", email: "", phone: "" });
    refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <button type="submit">Add Contact</button>
    </form>
  );
}
