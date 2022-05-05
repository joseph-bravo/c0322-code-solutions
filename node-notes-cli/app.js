const fs = require('fs');
const data = require('./data.json');
const [, , command, ...args] = process.argv;
const ids = Object.keys(data.notes);

if (command === 'read') {
  ids.forEach(e => {
    const out = `${e}: ${data.notes[e]}`;
    console.log(out);
  });
} else if (command === 'create' || command === 'write') {
  if (args.length > 1) {
    console.log('Error. Please provide your new entry as a single string.');
  }
  data.notes[data.nextId++] = args[0];
  saveData();
} else if (command === 'delete' || command === 'remove') {
  if (ids.includes(args[0])) {
    delete data.notes[args[0]];
    saveData();
    console.log();
  } else {
    logIncorrectArgument();
  }
} else if (command === 'update') {
  if (args.length > 2) {
    console.log('Error. Please provide your new entry as a single string');
  }
  if (ids.includes(args[0])) {
    data.notes[args[0]] = args[1];
    saveData();
  } else {
    logIncorrectArgument();
  }
} else {
  console.log('Available Commands: read, add, delete, update');
}

function logIncorrectArgument() {
  if (Number.isNaN(Number(args[0]))) {
    console.log('Please provide the ID as your first argument.');
  } else {
    console.log(`
There is no entry with ID [${args[0]}].
Available entry IDs are: ${ids.join(', ')}.
`);
  }
}

function saveData() {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Save successful!');
  });
}
