/* exported drop */
/*
iterate and push array elements into output array starting from count as index
 */

function drop(array, count) {
  var output = [];
  for (var i = count; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
