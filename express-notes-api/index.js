const express = require('express');
const fs = require('fs');

const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port 3000.');
});

let data;

fs.readFile('data.json', 'utf-8', (err, datafile) => {
  if (err) throw err;
  data = JSON.parse(datafile);
});

app.get('/api/notes', (req, res) => {
  res.status(200).json(Object.values(data.notes));
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  if (!Number.isInteger(Number(id))) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!Object.keys(data.notes).includes(id)) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }
  res.status(200).json(data.notes[id]);
});
