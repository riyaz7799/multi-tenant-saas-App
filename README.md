🧩 Multi-Tenant SaaS Platform with Project & Task Management
A full-stack Multi-Tenant SaaS Application where multiple organizations (tenants) can register, manage projects and tasks independently. Built with React, Node.js, Express, PostgreSQL, Sequelize ORM, secured with JWT authentication, role-based access, subscription plans, and fully containerized using Docker.

🚀 Features
- ✅ Multi-Tenant Architecture (data isolation per tenant)
- ✅ User Registration & Login (JWT based authentication)
- ✅ Protected Routes (no access without login)
- ✅ Projects & Tasks Management (CRUD operations)
- ✅ Tenant-based data filtering
- ✅ Subscription Plans (Free / Pro / Enterprise)
- ✅ PostgreSQL relational database
- ✅ Dockerized Backend + Frontend
- ✅ REST API with Swagger documentation


🔐 Authentication & Security
- JWT Token based authentication
- Token stored securely in browser storage
- Middleware protects all private routes
- Tenant ID embedded inside JWT
- Backend enforces tenant-based access

🏢 Multi-Tenancy
- Each user belongs to one tenant
- Tenant ID is attached to:
- Users
- Projects
- Tasks
- All queries are filtered by tenant automatically


🗄️ Database Tables
- tenants
- users
- projects
- tasks
All tables include:
- tenant_id
- created_at
- Referential integrity

📖 API Documentation (Swagger)
After running backend, open:
👉 http://localhost:5000/api-docs
Provides:
- Auth APIs
- Projects APIs
- Tasks APIs
- JWT authorization support

🐳 Docker Setup
▶ Run Full Stack with Docker
docker compose up --build


🔽 Stop Containers
docker compose down



▶ Local Development (Without Docker)
Backend
cd backend
npm install
npm start


Runs on: http://localhost:5000
Frontend
cd frontend
npm install
npm start


Runs on: http://localhost:3000

📌 Tech Stack
- Frontend: React
- Backend: Node.js + Express
- Database: PostgreSQL + Sequelize ORM
- Auth: JWT Authentication
- Containerization: Docker & Docker Compose
- API Docs: Swagger

📜 License
This project is licensed under the MIT License. Feel free to use and modify it for your own SaaS applications.

✨ That’s a perfectly structured README for GitHub. Would you like me to also add badges (like build status, license, tech stack logos) at the top to make it look even more professional?
