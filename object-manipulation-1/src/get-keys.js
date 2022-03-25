/* exported getKeys */
/*
new empty array to output var
for each key in argument obj, push into output
return output at end of loop
 */

function getKeys(obj) {
  var output = [];
  for (var key in obj) {
    output.push(key);
  }
  return output;
}
