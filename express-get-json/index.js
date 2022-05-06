const express = require('express');

const app = express();
app.listen(3000, () => {
  process.stdout.write('Express listening on port 3000.\n');
});

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

app.get('/api/grades', (req, res) => {
  const out = [];
  for (const prop in grades) {
    out.push(grades[prop]);
  }
  res.json(out);
});
