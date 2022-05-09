const express = require('express');
const fs = require('fs');
const data = require('./data.json');

const app = express();
const expressJson = express.json();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express listening on port 3000.');
});

app.use(expressJson);

app.get('/api/notes', (req, res) => {
  res.status(200).json(Object.values(data.notes));
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (!Number.isInteger(Number(id))) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }

  res.status(200).json(data.notes[id]);
});

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  const id = data.nextId++;
  data.notes[id] = {
    id: id,
    content: req.body.content
  };

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    } else {
      res.status(201).json(data.notes[id]);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (!Number.isInteger(Number(id))) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }

  delete data.notes[id];

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    } else {
      res.sendStatus(201);
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (!Number.isInteger(Number(id))) {
    res.status(400).json({ error: 'id must be a positive integer' });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
    return;
  }
  if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
    return;
  }

  data.notes[id] = {
    id: id,
    content: req.body.content
  };

  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    } else {
      res.status(201).json(data.notes[id]);
    }
  });
});
