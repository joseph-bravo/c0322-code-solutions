const express = require('express');
const app = express();
const json = express.json();

app.listen(3000, () => {
  process.stdout.write('Express listening on port 3000.\n');
});

app.use(json);

const grades = {};
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  grades[nextId++] = req.body;
  res.status(201).send(grades);
});

// name="Brendan Eich" course=JavaScript score=100
