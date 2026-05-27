import { useEffect, useState } from "react";
import axios from "axios";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import "./App.css";

function App() {
  const [leads, setLeads] = useState([]);

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads");
      setLeads(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1>Lead Management System</h1>

        <LeadForm fetchLeads={fetchLeads} />

        <LeadList
          leads={leads}
          fetchLeads={fetchLeads}
        />
      </div>
    </div>
  );
}

export default App;