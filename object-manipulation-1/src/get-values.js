/* exported getValues */
/*
new empty array output
loop: for each property key in obj, take obj @ key into output array
return output
*/
function getValues(obj) {
  var output = [];
  for (var key in obj) {
    output.push(obj[key]);
  }
  return output;
}
