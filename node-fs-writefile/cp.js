const fs = require('fs');
const [, , a, b] = process.argv;
fs.readFile(a, (err, data) => {
  if (err) throw err;
  fs.writeFile(b, data, err => {
    if (err) throw err;
  });
});
