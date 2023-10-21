const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ "Todo": "Get All Task" });
});

router.get('/task/:id', (req, res) => {
    res.json({ "Todo": "Get Single Task" });
});

router.post('/', (req, res) => {
    res.json({ "Todo": "Create Task" });
});

router.put('/:id', (req, res) => {
    res.json({ "Todo": "Update Task" });
});

router.delete('/:id', (req, res) => {
    res.json({ "Todo": "Delete Task" });
});

module.exports = router;