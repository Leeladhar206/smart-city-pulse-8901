const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  dueDateTime: {
    type: String,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Medium",
  },
  tags: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Not Started", "Started", "On Going", "Completed"],
    default: "Not Started",
  },
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  createdAt: {
    type: String,
    default: Date(),
  },
});

const TaskModel = mongoose.model("Task", taskSchema);

module.exports = { TaskModel };
