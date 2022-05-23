fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(console.log);

fetch('https://pokeapi.co/api/v2/pokemon/872')
  .then(res => res.json())
  .then(console.log);
