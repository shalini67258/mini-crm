const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server running");
});

// ADD LEAD API
app.post("/api/leads", async (req, res) => {
  try {
    const { name, phone, source } = req.body;

    const newLead = await pool.query(
      `INSERT INTO leads (name, phone, source)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, phone, source]
    );

    res.json(newLead.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// GET ALL LEADS API
app.get("/api/leads", async (req, res) => {
  try {
    const leads = await pool.query(
      "SELECT * FROM leads ORDER BY id DESC"
    );

    res.json(leads.rows);
  } catch (err) {
    console.log(err.message);
  }
});

// UPDATE LEAD STATUS
app.put("/api/leads/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await pool.query(
      "UPDATE leads SET status=$1 WHERE id=$2",
      [status, id]
    );

    res.json("Status updated");
  } catch (err) {
    console.log(err.message);
  }
});

// DELETE LEAD
app.delete("/api/leads/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM leads WHERE id=$1",
      [id]
    );

    res.json("Lead deleted");
  } catch (err) {
    console.log(err.message);
  }
});

// SERVER
app.listen(5000, () => {
  console.log("Server started on port 5000");
});