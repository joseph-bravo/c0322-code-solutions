/* exported difference */
/*
first: A, second: B
output array
for each index in A, check if it's included in B
  y: pass
  n: push A@index to output
for each index in B, check if exists in A
  y: pass
  n: check if exists in output already
    y: pass
    n: push B@index to output
return output
*/

function difference(arrayA, arrayB) {
  var output = [];
  for (var a = 0; a < arrayA.length; a++) {
    if (!arrayB.includes(arrayA[a])) {
      output.push(arrayA[a]);
    }
  }
  for (var b = 0; b < arrayB.length; b++) {
    if (!arrayA.includes(arrayB[b]) && !output.includes(arrayB[b])) {
      output.push(arrayB[b]);
    }
  }
  return output;
}
