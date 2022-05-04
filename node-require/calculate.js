const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const [, , a, operation, b] = process.argv;

let out;
const aParsed = Number.parseInt(a);
const bParsed = Number.parseInt(b);
switch (operation) {
  case 'plus':
    out = add(aParsed, bParsed);
    break;
  case 'minus':
    out = subtract(aParsed, bParsed);
    break;
  case 'times':
    out = multiply(aParsed, bParsed);
    break;
  case 'over':
    out = divide(aParsed, bParsed);
    break;
  default:
    out = `ERROR: invalid operator
    use: plus, minus, times, over`;
}
console.log('result:', out);
