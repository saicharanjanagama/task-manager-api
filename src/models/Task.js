const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
      trim: true,
      minlength: [3, 'Title must be at least 3 characters'],
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    completed: {
      type: Boolean,
      default: false
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    },
    dueDate: {
      type: Date
    },
    category: {
      type: String,
      enum: ['work', 'personal', 'shopping', 'health', 'other'],
      default: 'personal'
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

/* 🚀 Indexes */
taskSchema.index({ user: 1, completed: 1 });
taskSchema.index({ dueDate: 1 });
taskSchema.index({ title: 'text', description: 'text' });

/* ✨ Pre-save hook */
taskSchema.pre('save', function () {
  if (this.title) {
    this.title =
      this.title.charAt(0).toUpperCase() + this.title.slice(1);
  }
});

module.exports = mongoose.model('Task', taskSchema);
