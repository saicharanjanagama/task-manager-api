require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./src/config/database');
const userRoutes = require('./src/routes/userRoutes');
const auth = require('./src/middleware/auth');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// User Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// DB Connection
connectDB();

app.get('/protected', auth, (req, res) => {
  res.json({
    message: 'Access granted',
    userId: req.userId
  });
});

// Test Route
app.get('/', (req, res) => {
  res.send('Task Manager API running 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
