function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convert minutes to seconds (5):', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('greet (\'beavis\'):', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

console.log('get area (17, 42)', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log("get first name ({ firstName: 'Lelouche', lastName: 'Lamperouge' }):", getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log("get last element (['propane', 'and', 'propane', 'accessories']):", getLastElement(['propane', 'and', 'propane', 'accessories']));
