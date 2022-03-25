/* exported initial */
/*
new empty array output. for each index, push values of array @ index until index
is less than -2 length of array.
*/

function initial(array) {
  var output = [];
  for (var i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
}
