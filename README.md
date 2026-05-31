# Finance Data Processing Backend

## 🌐 Live Demo

**API Base URL:** https://finance-backend-zct1.onrender.com/

> ⚠️ Hosted on Render free tier — first request may take ~30 seconds to wake the server.
>
> To explore the API: use `POST /api/auth/register` to create an account, then include the returned JWT in the `Authorization: Bearer <token>` header for all protected routes.

## 📖 API Documentation

Full API documentation with request/response examples is available on Postman:

**[View Postman Docs →](https://documenter.getpostman.com/view/51487643/2sBXiqEUUf)**

---

## 📌 Overview

A backend system for managing financial transactions with role-based access control and dashboard analytics. Built with Node.js, Express.js, and MongoDB — deployed on Render.

---

## 🚀 Tech Stack

| Layer          | Technology                |
| -------------- | ------------------------- |
| Runtime        | Node.js                   |
| Framework      | Express.js                |
| Database       | MongoDB (Mongoose)        |
| Authentication | JWT (JSON Web Tokens)     |
| Authorization  | Role-Based Access Control |
| Deployment     | Render                    |

---

## 👤 Roles & Permissions

| Role    | Permissions                                        |
| ------- | -------------------------------------------------- |
| Admin   | Full access (CRUD + user management + global data) |
| Analyst | Create + view own data                             |
| Viewer  | Read-only access                                   |

---

## 🔐 Authentication

- JWT-based authentication
- Token required in Authorization header for all protected routes:

```
Authorization: Bearer <token>
```

---

## 📁 Project Structure

```
Finance-backend/
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── transactionController.js
│   │   └── dashboardController.js
│   ├── middleware/
│   │   ├── auth.js             # JWT verification
│   │   └── roleCheck.js        # RBAC enforcement
│   ├── models/
│   │   ├── User.js
│   │   └── Transaction.js
│   └── routes/
│       ├── auth.js
│       ├── users.js
│       ├── transactions.js
│       └── dashboard.js
├── server.js
├── package.json
└── .env
```

---

## 📦 API Endpoints

### Auth

| Method | Endpoint           | Access |
| ------ | ------------------ | ------ |
| POST   | /api/auth/register | Public |
| POST   | /api/auth/login    | Public |

### Users

| Method | Endpoint              | Access     |
| ------ | --------------------- | ---------- |
| GET    | /api/users            | Admin only |
| PATCH  | /api/users/:id/role   | Admin only |
| PATCH  | /api/users/:id/status | Admin only |

### Transactions

| Method | Endpoint              | Access         |
| ------ | --------------------- | -------------- |
| POST   | /api/transactions     | Admin, Analyst |
| GET    | /api/transactions     | All roles      |
| PUT    | /api/transactions/:id | Admin, Analyst |
| DELETE | /api/transactions/:id | Admin only     |

### Dashboard

| Method | Endpoint                | Access    |
| ------ | ----------------------- | --------- |
| GET    | /api/dashboard/summary  | All roles |
| GET    | /api/dashboard/category | All roles |

---

## 📊 Features

- Role-based access control with 3 permission tiers
- Per-user data isolation (users see only their own data)
- Admin-level global data visibility across all users
- Transaction filtering by category and date
- Aggregated analytics powered by MongoDB aggregation pipelines

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/nithin-code-web/Finance-backend.git
cd Finance-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the development server

```bash
npm run dev
```

The API will be available at `http://localhost:5000`.

---

## 💡 Future Improvements

- Pagination for transaction listings
- Rate limiting to prevent API abuse
- Advanced analytics (monthly trends, top categories)
- Unit and integration testing (Jest + Supertest)
- Swagger/OpenAPI documentation

---

## 👤 Author

**Nithin Budime**  
Backend Developer | Full Stack Development Learner  
[GitHub](https://github.com/nithin-code-web)
