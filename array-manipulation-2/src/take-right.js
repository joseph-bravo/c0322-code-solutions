/* exported takeRight */

/*
loop through array starting at given length - index,
  check if i is within range of indexes (greater than or equal 0)
push into output array then return that
*/

function takeRight(array, count) {
  var output = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (i >= 0) {
      output.push(array[i]);
    }
  }
  return output;
}
