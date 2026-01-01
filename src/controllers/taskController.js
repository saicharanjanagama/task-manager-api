const Task = require('../models/Task');

/* CREATE TASK */
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      user: req.userId
    });

    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* GET ALL TASKS (with pagination & filters) */
/* GET ALL TASKS (Advanced: search, sort, paginate, populate) */
exports.getTasks = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      completed,
      priority,
      category,
      search,
      sort
    } = req.query;

    // Base filter (user-specific)
    const filter = { user: req.userId };

    if (completed !== undefined) filter.completed = completed === 'true';
    if (priority) filter.priority = priority;
    if (category) filter.category = category;

    // 🔍 Search (title + description)
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // 🔃 Sorting
    const sortBy = sort || '-createdAt';

    // 📦 Query
    const tasks = await Task.find(filter)
      .populate('user', 'name email') // optional, safe
      .sort(sortBy)
      .limit(Number(limit))
      .skip((page - 1) * limit);

    const total = await Task.countDocuments(filter);

    res.json({
      success: true,
      count: tasks.length,
      pagination: {
        currentPage: Number(page),
        limit: Number(limit),
        total,
        totalPages: Math.ceil(total / limit)
      },
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

/* UPDATE TASK */
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task)
      return res.status(404).json({ message: 'Task not found' });

    res.json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/* DELETE TASK */
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      user: req.userId
    });

    if (!task)
      return res.status(404).json({ message: 'Task not found' });

    res.json({ success: true, message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
