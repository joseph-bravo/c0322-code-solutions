const fs = require('fs');
let [, , ...out] = process.argv;
out = out.join(' ') + '\n';
fs.writeFile('./note.txt', out, err => {
  if (err) throw err;
});
