const takeAChance = require('./take-a-chance');

const chance = takeAChance('Joseph');
chance.then(val => console.log(val));
chance.catch(err => console.log(err.message));
