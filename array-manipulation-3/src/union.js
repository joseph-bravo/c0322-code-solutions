/* exported union */
/*
empty var array output jklfdsalkjhgdfs
for each array (A and B), check if index isn't in output
  y: push to ouput
  n: pass
output return
*/

function union(arrayA, arrayB) {
  var output = [];
  for (var i = 0; i < arrayA.length; i++) {
    if (!output.includes(arrayA[i])) {
      output.push(arrayA[i]);
    }
  }
  for (var b = 0; b < arrayB.length; b++) {
    if (!output.includes(arrayB[b])) {
      output.push(arrayB[b]);
    }
  }
  return output;
}
