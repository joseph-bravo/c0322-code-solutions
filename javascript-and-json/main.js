var array = [
  { isbn: '12345676987', title: 'the land of wahoo', author: 'me' },
  { isbn: '31521351354', title: 'the land of wahoo 2', author: 'also me' },
  { isbn: '965889685976', title: 'the ocean of wahoo', author: 'also me but older' }
];
console.log('array:', array);
console.log('typeof array:', typeof array);

var stringified = JSON.stringify(array);
console.log('stringified:', stringified);
console.log('typeof stringified:', typeof stringified);

var JSONraw = '{"id":5,"name":"joseph"}';
console.log('JSONraw:', JSONraw);
console.log('typeof JSONraw:', typeof JSONraw);

var parsed = JSON.parse(JSONraw);
console.log('parsed:', parsed);
console.log('typeof parsed:', typeof parsed);
