import { useEffect, useState } from "react";
import axios from "axios";

function LeadList() {

  const [leads, setLeads] = useState([]);

  // GET ALL LEADS
  const getLeads = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/leads"
      );

      setLeads(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  // DELETE LEAD
  const deleteLead = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/leads/${id}`
      );

      getLeads();

    } catch (error) {

      console.log(error);
    }
  };

  // UPDATE STATUS
  const updateStatus = async (id, status) => {

    try {

      await axios.put(
        `http://localhost:5000/api/leads/${id}`,
        {
          status: status
        }
      );

      getLeads();

    } catch (error) {

      console.log(error);
    }
  };

  useEffect(() => {
    getLeads();
  }, []);

  return (
    <div>

      <h2
        style={{
          marginTop: "30px",
          marginBottom: "20px"
        }}
      >
        Lead List
      </h2>

      {
        leads.length === 0 ? (

          <p>No Leads Found</p>

        ) : (

          leads.map((lead) => (

            <div
              key={lead.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                marginBottom: "15px",
                backgroundColor: "#f9f9f9",
                boxShadow: "0px 2px 5px rgba(0,0,0,0.1)"
              }}
            >

              <h3>{lead.name}</h3>

              <p>
                <strong>Phone:</strong> {lead.phone}
              </p>

              <p>
                <strong>Source:</strong> {lead.source}
              </p>

              <div
                style={{
                  marginTop: "10px"
                }}
              >

                <strong>Status:</strong>

                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(
                      lead.id,
                      e.target.value
                    )
                  }
                  style={{
                    marginLeft: "10px",
                    padding: "5px"
                  }}
                >

                  <option>
                    Interested
                  </option>

                  <option>
                    Not Interested
                  </option>

                  <option>
                    Converted
                  </option>

                </select>

              </div>

              <button
                onClick={() =>
                  deleteLead(lead.id)
                }
                style={{
                  marginTop: "15px",
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Delete
              </button>

            </div>
          ))
        )
      }

    </div>
  );
}

export default LeadList;