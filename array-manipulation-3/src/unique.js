/* exported unique */
/*
new empty array for output;
for each index in array
  check if output DOESN'T include array[i] via Array.includes(array[i])
    y: state true
    n: state false
  check state of inclusion in output
    y: pass
    n: push to output
return output
*/

function unique(array) {
  var output = [];
  for (var i = 0; i < array.length; i++) {
    var doesInclude = false;
    for (var x = 0; x < output.length; x++) {
      if (output.includes(array[i])) {
        doesInclude = true;
      }
    }
    if (!doesInclude) {
      output.push(array[i]);
    }
  }
  return output;
}
