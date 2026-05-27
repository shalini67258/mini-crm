import { useEffect, useState } from "react";
import axios from "axios";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";
import "./App.css";

function App() {
  const [leads, setLeads] = useState([]);

  // FETCH LEADS
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
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #4facfe, #8e44ad)",
        padding: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          width: "700px",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#6a11cb",
            marginBottom: "20px",
          }}
        >
          🚀 Lead Management System
        </h1>

        <LeadForm fetchLeads={fetchLeads} />

        <hr style={{ margin: "25px 0" }} />

        <LeadList leads={leads} fetchLeads={fetchLeads} />
      </div>
    </div>
  );
}

export default App;