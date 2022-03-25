/* exported take */
/*
new empty output array
loop through indexes until index reaches count - 1
  check if there's a value, then push array @ index into output array
return output array
*/
function take(array, count) {
  var output = [];
  for (var i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      output.push(array[i]);
    }
  }
  return output;
}
