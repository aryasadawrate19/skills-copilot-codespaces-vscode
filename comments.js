// Create web server with Express
// npm install express
const express = require('express');
const app = express();

// Allow cross-origin requests
// npm install cors
const cors = require('cors');
app.use(cors());

// Use JSON in request body
app.use(express.json());

// Comments array
let comments = [
    { id: 1, body: 'comment 1' },
    { id: 2, body: 'comment 2' },
    { id: 3, body: 'comment 3' }
];

// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const comment = req.body;
    comments = comments.map(c => c.id === id ? comment : c);
    res.json(comment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id);
    comments = comments.filter(c => c.id !== id);
    res.json({ id });
});

// Start server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Test with Postman
// GET http://localhost:3000/comments
// POST http://localhost:3000/comments
// PUT http://localhost:3000/comments/1
// DELETE http://localhost:300