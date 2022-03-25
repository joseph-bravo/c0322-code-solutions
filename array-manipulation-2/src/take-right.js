/* exported takeRight */
/*
output an array
loop through array while counter is less than count arg AND array.length - i - 1 doesn't go below 0
  start loop index from the end, then decrement at end of loop
  unshift array@index
return output
 */

function takeRight(array, count) {
  var output = [];
  for (var i = 0; i < count && (array.length - i - 1 >= 0); i++) {
    var index = array.length - i - 1;
    output.unshift(array[index]);
  }
  return output;
}
