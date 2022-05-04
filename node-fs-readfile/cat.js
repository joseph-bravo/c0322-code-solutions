const fs = require('fs');
const [, , ...filePaths] = process.argv;

const loadingZone = [];

console.log('================================');

filePaths.forEach(e => {
  fs.readFile(e, 'utf-8', (err, data) => {
    if (err) return;
    loadingZone.push({
      name: e,
      data: data
    });
    if (loadingZone.length === filePaths.length) {
      let out = '';
      filePaths.forEach(e => {
        const toAdd = loadingZone.find(file => file.name === e);
        out += toAdd.data;
      });
      console.log(out);
      console.log('================================');
    }
  });
});
