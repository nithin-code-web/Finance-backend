# Finance Data Processing Backend

## 📌 Overview

A backend system for managing financial transactions with role-based access control and dashboard analytics.

## 🚀 Tech Stack

* Node.js
* Express.js
* MongoDB
* JWT Authentication

## 👤 Roles & Permissions

| Role    | Permissions                                        |
| ------- | -------------------------------------------------- |
| Admin   | Full access (CRUD + user management + global data) |
| Analyst | Create + view own data                             |
| Viewer  | Read-only access                                   |

---

## 🔐 Authentication

* JWT-based authentication
* Token required in Authorization header:

```
Authorization: Bearer <token>
```

---

## 📦 API Endpoints

### Auth

* POST /api/auth/register
* POST /api/auth/login

### Users (Admin only)

* GET /api/users
* PATCH /api/users/:id/role
* PATCH /api/users/:id/status

### Transactions

* POST /api/transactions
* GET /api/transactions
* PUT /api/transactions/:id
* DELETE /api/transactions/:id

### Dashboard

* GET /api/dashboard/summary
* GET /api/dashboard/category

---

## 📊 Features

* Role-based access control
* Data isolation per user
* Admin-level global data visibility
* Transaction filtering
* Aggregated analytics using MongoDB

---

## ⚙️ Setup

```bash
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run server:

```bash
npm run dev
```

---

## 📌 Assumptions

* JWT used for authentication
* Admin has full access
* Other users restricted to their own data

---

## 💡 Future Improvements

* Pagination
* Rate limiting
* Advanced analytics
* Unit testing
