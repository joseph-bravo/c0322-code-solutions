/* exported compact */
/*
  filters out falsy in array then returns it
  new output array
  for every index in array, check if falsy, if not then push into output
  return output
*/

function compact(arg) {
  var output = [];
  for (var i = 0; i < arg.length; i++) {
    if (arg[i]) {
      output.push(arg[i]);
    }
  }
  return output;
}
