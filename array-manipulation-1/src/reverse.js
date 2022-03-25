/* exported reverse */
/*
start new output var with empty array
for every index in argument, unshift into output
return output
*/
function reverse(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    output.unshift(array[i]);
  }
  return output;
}
