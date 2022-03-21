var student = {
  firstName: 'Joseph',
  lastName: 'Bravo',
  age: 20
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'retail worker';
console.log('lives in irvine?: ', student.livesInIrvine);
console.log('previous occupation?: ', student.previousOccupation);
console.log('value of student', student);

var vehicle = {
  make: 'BMW',
  model: 'cool car',
  year: 2022
};

vehicle.color = 'blue';
vehicle.isConvertible = true;
console.log('vehicle color?:', vehicle.color);
console.log('vehicle is convertible?:', vehicle.isConvertible);
console.log('vehicle object:', vehicle);

var pet = {
  name: 'birch',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('value of pet', pet);
