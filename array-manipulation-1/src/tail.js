/* exported tail */
/*
loop: for every index in array starting at 1, push into new array output.
return output at end of loop
*/
function tail(array) {
  var output = [];
  for (var i = 1; i < array.length; i++) {
    output.push(array[i]);
  }
  return output;
}
