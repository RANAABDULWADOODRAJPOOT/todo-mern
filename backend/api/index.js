const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch the todos' });
    }
});

router.get('/todo/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Could not fetch the todo' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const todo = new Todo({
            title,
            description,
        });
        const savedTodo = await todo.save();
        res.json(savedTodo);
    } catch (error) {
        res.status(500).json({ error: 'Could not create a todo' });
    }

});

router.put('/:id', async (req, res) => {
    try {
        const todoId = req.params.id;
        const update = req.body;

        const todo = await Todo.findByIdAndUpdate(todoId, update, {
            new: true,
        });

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: 'Could not update the todo' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const todoId = req.params.id;

        const todo = await Todo.findByIdAndRemove(todoId);

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Could not delete the todo' });
    }
});

module.exports = router;