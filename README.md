<h1 align="center">🗂️ Task Management API – Node.js, Express & MongoDB</h1>

<p align="center"> 
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Framework-Express.js-lightgrey?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Auth-JWT-orange?style=for-the-badge" /> 
  <img src="https://img.shields.io/badge/API-RESTful-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Testing-Postman-yellow?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Deployment-Render-black?style=for-the-badge" />
</p> 

<p align="center">
  A <b>RESTful Task Management API</b> built using <b>Node.js, Express, and MongoDB</b>.  
  This project demonstrates <b>database integration, JWT authentication, full CRUD operations</b>,  
  and <b>production-ready backend architecture</b>.
</p>

---

## 🚀 Live API

🔗 **Base URL**  
https://task-manager-api-m5gv.onrender.com

🔍 **Health Check**  
https://task-manager-api-m5gv.onrender.com/api/health

---

## 📌 Project Overview

The **Task Management API** is a backend system designed to help users manage tasks securely using a MongoDB database.  
Each user can create, view, update, and delete their own tasks after authentication.

### 🎯 Project Goals & Objectives

- Build a scalable REST API using Node.js & Express
- Integrate MongoDB for persistent data storage
- Implement JWT-based user authentication
- Enable full CRUD operations on tasks
- Secure routes using middleware
- Handle errors and validation centrally
- Test APIs using Postman
- Deploy a production-ready backend

---

## 🎯 Project Features

- 🔐 User registration & login using JWT authentication  
- 📦 MongoDB database integration using Mongoose  
- ✅ Full CRUD operations for tasks  
- 📌 Mark tasks as completed or pending  
- 👤 User-specific task ownership  
- 🧱 Middleware for authentication, validation & logging  
- ⚠️ Centralized error handling  
- 🧪 API testing & documentation using Postman  
- 🌍 Deployed backend accessible via public URL  

---

## 🛠️ Technologies Used

- **Node.js**  
  *(Server-side JavaScript runtime)*  
- **Express.js**  
  *(REST API framework)*  
- **MongoDB**  
  *(NoSQL database)*  
- **Mongoose**  
  *(MongoDB object modeling)*  
- **JWT (JSON Web Tokens)**  
  *(Authentication & authorization)*  
- **dotenv**  
  *(Environment variable management)*  
- **Postman**  
  *(API testing & documentation)*  
- **Render**  
  *(Cloud deployment platform)*  

---

## 🧠 How the API Works

1. Users register or log in using authentication endpoints  
2. Server generates and returns a JWT token  
3. Protected routes require a valid JWT token  
4. Users can create, view, update, and delete their own tasks  
5. Tasks are stored persistently in MongoDB  
6. Middleware handles authentication, validation, and logging  
7. Errors are handled globally  
8. API is deployed and tested via Postman  

---

## 🔐 Authentication Flow

- User logs in using `/api/auth/login`
- Server generates a JWT token
- Token must be sent in headers for protected routes
- Authorization: `Bearer <JWT_TOKEN>`

Protected routes:
- Create / Update / Delete tasks
- View user-specific tasks

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register`
- `POST /api/auth/login`

### Tasks
- `GET /api/tasks` *(Protected)*
- `POST /api/tasks` *(Protected)*
- `PUT /api/tasks/:id` *(Protected)*
- `DELETE /api/tasks/:id` *(Protected)*

---

## 📂 Project Structure

```bash
task-manager-api/
│
├── server.js
├── package.json
├── README.md
├── .env.example
├── postman-collection.json
│
└── src/
    ├── config/
    │   └── database.js
    │
    ├── models/
    │   ├── User.js
    │   └── Task.js
    │
    ├── controllers/
    │   ├── userController.js
    │   └── taskController.js
    │
    ├── routes/
    │   ├── userRoutes.js
    │   └── taskRoutes.js
    │
    └── middleware/
        └── auth.js
```

---

## 🧪 API Testing

- All endpoints tested using Postman
- Requests saved and exported as:

```bash
postman-collection.json
```

- Collection included in the project root for easy import

---

## 🚀 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/saicharanjanagama/blog-api.git
cd blog-api
```

2. Install dependencies:
```bash
npm install
```

3. Create .env file:
```bash
PORT=3000
JWT_SECRET=your_secret_key
```

4. Start server
```bash
npm run dev
```

---

## 📅 7-Day Development Plan

| Day   | Task                               |
| ----- | ---------------------------------- |
| Day 1 | Node.js setup & npm initialization |
| Day 2 | Express server & routing           |
| Day 3 | CRUD operations for posts          |
| Day 4 | JWT authentication                 |
| Day 5 | Validation & error handling        |
| Day 6 | Postman documentation              |
| Day 7 | Testing & deployment               |

---

## 📈 What This Project Demonstrates

- RESTful API design
- Backend authentication & authorization
- Middleware architecture
- Secure environment handling
- Real-world API testing workflow
- Cloud deployment experience

---

## 👨‍💻 Author

It’s me — **Sai Charan Janagama** 😄<br>
🎓 Computer Science Graduate | 🌐 Aspiring Full Stack Developer<br>
📧 [Email Me](saic89738@gmail.com) ↗<br>
🔗 [LinkedIn](https://www.linkedin.com/in/saicharanjanagama/) ↗<br>
💻 [GitHub](https://github.com/SaiCharanJanagama) ↗

