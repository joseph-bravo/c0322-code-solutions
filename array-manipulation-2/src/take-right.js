/* exported takeRight */

/*
loop through array starting at given length - index,
  use Math.max to set i to 0 if array.length - count is less than 0
push into output array then return that
*/

function takeRight(array, count) {
  var output = [];
  for (var i = Math.max(0, array.length - count); i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
