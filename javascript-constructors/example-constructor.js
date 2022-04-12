function ExampleConstructor() {

}
console.log('value of ExampleConstructor.prototype', ExampleConstructor.prototype);

var constructed = new ExampleConstructor();

console.log('value of constructed', constructed);

var isConstructedFromExampleConstructor = constructed instanceof ExampleConstructor;
console.log('instanceof? :', isConstructedFromExampleConstructor);
