/* exported pick */
/*
make empty object for output
for each item in keys array, check if it exists in object as property
  if it exists (not undefined), add property to output object with its value
return output
 */

function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}
