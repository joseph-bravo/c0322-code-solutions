/* exported zip */
/*
empty output array variable
get lengths of both, math.min them fellas, assign to zipCount
iterate through both arrays to zipCount value
  push to output array containing first[i] and second[i]
return output
*/

function zip(first, second) {
  var output = [];
  var zipCount = Math.min(first.length, second.length);
  for (var i = 0; i < zipCount; i++) {
    output.push([first[i], second[i]]);
  }
  return output;
}
