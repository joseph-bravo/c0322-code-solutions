const fs = require('fs');
const [, , filepath] = process.argv;

fs.readFile(filepath, 'utf-8', (err, data) => {
  if (err) console.log('Error. Please provide a valid filepath.');
  console.log(data);
});
