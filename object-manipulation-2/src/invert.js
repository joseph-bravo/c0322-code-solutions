/* exported invert */
/*
empty object for output
for each property (for...in), set value as property and key as value to new object
 */

function invert(source) {
  var output = {};
  for (var key in source) {
    output[source[key]] = key;
  }
  return output;
}
