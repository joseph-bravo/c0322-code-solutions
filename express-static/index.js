const express = require('express');
const path = require('path');
const app = express();

app.listen(3000, () => {
  console.log('listening on port 3000');
});

const pathPublic = path.join(__dirname, 'public');
const staticMiddleware = express.static(pathPublic);

app.use(staticMiddleware);
