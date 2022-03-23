// Math Object

var num1 = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max(num1, num2, num3);
console.log('maximum value:', maximumValue);

var heroes = ['mr man', 'dr man', 'super duper man', 'the man'];

var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('random index:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('random hero:', randomHero);

// Array Methods

var library = [
  {
    title: 'applebees and the apple of the bee',
    author: 'mr apple'
  },
  {
    title: 'zoomie and the speed',
    author: 'the zoom man'
  },
  {
    title: 'book about peanut butter',
    author: 'butter peanut'
  }
];

var lastBook = library.pop();
console.log('last book:', lastBook);

var firstBook = library.shift();
console.log('first book', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log(library);

// String Methods

var fullName = 'Joseph Bravo';
var firstAndLastName = fullName.split(' ');
console.log('first and last name:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('say my name:', sayMyName);
