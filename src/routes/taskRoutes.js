const express = require('express');
const auth = require('../middleware/auth');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const router = express.Router();

router.use(auth); // 🔐 Protect all routes

router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
