const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((prev, current) => prev + current);
console.log('value of sum:', sum);

const product = numbers.reduce((prev, current) => prev * current);
console.log('value of product:', product);

const balance = account.reduce((prev, current) => {
  switch (current.type) {
    case 'deposit':
      return prev + current.amount;
    case 'withdrawal':
      return prev - current.amount;
    default:
      return 0;
  }
}, 0);
console.log('value of balance:', balance);

const composite = traits.reduce((prev, current) => {
  const [key, value] = Object.entries(current)[0];
  prev[key] = value;
  return prev;
});

console.log('value of composite:', composite);
