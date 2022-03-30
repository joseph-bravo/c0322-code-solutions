/* exported flatten */
/*
var output empty array
for each index in array, check if index is an array
  y: for each index in index, push to output
  n: push to output
return output
*/

function flatten(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var x = 0; x < array[i].length; x++) {
        output.push(array[i][x]);
      }
    } else {
      output.push(array[i]);
    }
  }
  return output;
}
