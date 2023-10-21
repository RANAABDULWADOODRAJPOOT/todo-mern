const mongoose = require('mongoose');

// Define the schema for the Todo model
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

// Create the Todo model using the schema
const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
