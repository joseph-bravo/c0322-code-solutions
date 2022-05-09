const express = require('express');

const app = express();

app.use((req, res) => {
  res.send('bruh');
});

app.listen(3000, () => {
  process.stdout.write('Express listening on port 3000');
});
