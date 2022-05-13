const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('express listening on port 3000');
});

/**
 *! Grade Object Format
 ** name: string
 ** course: string
 ** score: number (min 0, max 100)
 ** gradeId: number (sequenced)
 ** createdAt: timestamp (auto)
 */

// ? GET - Get all grades.
app.get('/api/grades', (req, res) => {
  const sql = `/* SQL */
  select
    *
  from
    "grades"
  `;

  db.query(sql)
    .then(value => {
      res.status(200).json(value.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// ? POST - Insert a grade.
app.post('/api/grades', (req, res) => {
  const body = req.body;

  if (!body.name || !body.course || !body.score) {
    res.status(400).json({
      error: 'please provide a name, course, and score'
    });
    return;
  }
  const score = Number(body.score);
  if (!(score >= 0) || !(score <= 100) || !Number.isInteger(score)) {
    res.status(400).json({
      error: 'The provided score must be an integer between 0 to 100.'
    });
    return;
  }

  const sql = `/* SQL */
  insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
  returning
    *
  `;
  const params = [body.name, body.course, score];

  db.query(sql, params)
    .then(value => res.status(201).send(value.rows[0]))
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// ? PUT - Update a grade.
app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (Number.isNaN(gradeId) || !Number.isInteger(gradeId)) {
    res.status(400).json({
      error: 'please provide a positive integer as the grade id in the endpoint'
    });
    return;
  }

  const body = req.body;

  if (!body.name || !body.course || !body.score) {
    res.status(400).json({
      error: 'please provide a name, course, and score'
    });
    return;
  }

  const score = Number(body.score);

  if (!(score >= 0) || !(score <= 100) || !Number.isInteger(score)) {
    res.status(400).json({
      error: 'The provided score must be an integer between 0 to 100.'
    });
    return;
  }

  const sql = `/* SQL */
  update
    "grades"
  set
    "name" = $1, "course" = $2, "score" = $3
  where
    "gradeId" = $4
  returning
    *
  `;

  const params = [body.name, body.course, score, gradeId];

  db.query(sql, params)
    .then(value => {
      if (!value.rows.length) {
        res.status(404).json({
          error: `GradeID ${gradeId} does not exist in the database.`
        });
        return;
      }
      res.status(200).json(value.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

// ? DELETE - Delete a grade.
app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (Number.isNaN(gradeId) || !Number.isInteger(gradeId)) {
    res.status(400).json({
      error: 'please provide a positive integer as the grade id in the endpoint'
    });
    return;
  }

  const sql = `/* SQL */
  delete from "grades"
  where
    "gradeId" = $1
  returning
    *
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(query => {
      if (!query.rows.length) {
        res.status(404).json({
          error: `GradeID ${gradeId} does not exist in the database.`
        });
        return;
      }
      res.sendStatus(204);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
