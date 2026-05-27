# Mini CRM - Lead Management System

## Project Description
This is a simple Full Stack Lead Management System built using:

- React.js
- Node.js
- Express.js
- PostgreSQL

Users can:
- Add Leads
- View Leads
- Update Lead Status
- Delete Leads

---

## Technologies Used

Frontend:
- React
- Axios
- CSS

Backend:
- Node.js
- Express.js

Database:
- PostgreSQL

---

## Features

- Add new leads
- View all leads
- Update lead status
- Delete leads
- Form validation
- API integration

---

## Project Structure

mini-crm/
│
├── client/
│ ├── src/
│ └── components/
│
├── server/
│ ├── index.js
│ ├── db.js
│
└── README.md

---

## Database Table

```sql
CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(20),
    source VARCHAR(50),
    status VARCHAR(20) DEFAULT 'Interested'
);
RUN FRONTEND
cd client
npm install
npm run dev

RUN BACKEND
cd server
npm install
node index.js

API Endpoints
GET /api/leads
POST /api/leads
PUT /api/leads/:id
DELETE /api/leads/:id

Author
Shalini

