/* exported dropRight */
/*
subtract count from length, subtract by 1,
iterate through array and push defined values to output array
 */

function dropRight(array, count) {
  var output = [];
  var max = array.length - count;
  for (var i = 0; i < max; i++) {
    if (array[i] !== undefined) {
      output.push(array[i]);
    }
  }
  return output;
}
