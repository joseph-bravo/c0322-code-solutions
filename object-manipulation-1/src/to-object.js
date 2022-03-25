/* exported toObject */
/*
new empty object to var output
take index 1 of array, assign to property of output object @ (index 0 of array)
return output
*/
function toObject(keyValuePair) {
  var output = {};
  output[keyValuePair[0]] = keyValuePair[1];
  return output;
}
