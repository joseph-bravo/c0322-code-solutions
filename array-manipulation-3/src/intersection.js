/* exported intersection */
/* it's literally just difference but with booleans reversed lol */

function intersection(arrayA, arrayB) {
  var output = [];
  for (var a = 0; a < arrayA.length; a++) {
    if (arrayB.includes(arrayA[a])) {
      output.push(arrayA[a]);
    }
  }
  for (var b = 0; b < arrayB.length; b++) {
    if (arrayA.includes(arrayB[b]) && !output.includes(arrayB[b])) {
      output.push(arrayB[b]);
    }
  }
  return output;
}
