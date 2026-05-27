import { useState } from "react";
import axios from "axios";

function LeadForm({ fetchLeads }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    source: "Call",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );

      alert("Lead Added Successfully");

      fetchLeads();

      setFormData({
        name: "",
        phone: "",
        source: "Call",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Lead</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="phone"
        placeholder="Enter Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <select
        name="source"
        value={formData.source}
        onChange={handleChange}
      >
        <option>Call</option>
        <option>WhatsApp</option>
        <option>Instagram</option>
        <option>Website</option>
      </select>

      <button type="submit">
        Add Lead
      </button>
    </form>
  );
}

export default LeadForm;